
import { useState } from "react";
import sendMessage from "@/utils/sendMessage";

export default function ChatBox({ gpt }: { gpt: { id: string; name: string; system: string } }) {
  const [messages, setMessages] = useState([{ role: "system", content: gpt.system }]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const reply = await sendMessage(newMessages);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  return (
    <div>
      <div className="mb-2">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <b>{msg.role === "user" ? "너" : msg.role === "assistant" ? gpt.name : "시스템"}</b>: {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="메시지 입력..."
        className="border px-2 py-1 mr-2"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-1 rounded">
        전송
      </button>
    </div>
  );
}
