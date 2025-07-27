
import { useState } from "react";
import GPTTab from "@/components/GPTTab";
import ChatBox from "@/components/ChatBox";

const gpts = [
  { id: "tony", name: "토니스타크 GPT", system: "비꼬는 천재형 조언자처럼 답해줘." },
  { id: "creative", name: "창작 의논 GPT", system: "협조적이고 객관적인 창작 조력자처럼 답해줘." },
  { id: "love", name: "연애 의논 GPT", system: "퀴어 친화적이고 따뜻한 연애 상담가처럼 답해줘." },
  { id: "yoorim", name: "자캐 GPT - 천요우린", system: "INFJ, 구룡성채 출신, 낡고 집착적인 자캐처럼 행동해." },
  { id: "life", name: "자취생활 GPT", system: "자취 생활의 동료처럼, 현실적인 조언을 해줘." },
  { id: "default", name: "그냥 상담 GPT", system: "전형적인 상담사처럼 공감하고 조언해줘." },
];

export default function Home() {
  const [activeGPT, setActiveGPT] = useState(gpts[0]);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">✨ 유진 GPT 앱 ✨</h1>
      <div className="flex gap-2 mb-4 flex-wrap">
        {gpts.map((gpt) => (
          <GPTTab key={gpt.id} gpt={gpt} active={activeGPT.id === gpt.id} onClick={() => setActiveGPT(gpt)} />
        ))}
      </div>
      <ChatBox gpt={activeGPT} />
    </div>
  );
}
