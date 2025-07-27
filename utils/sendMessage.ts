
export default async function sendMessage(messages: any[]) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.NEXT_PUBLIC_OPENAI_API_KEY}\`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages,
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "응답 없음";
}
