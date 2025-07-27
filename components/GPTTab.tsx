
type GPTProps = {
  gpt: { id: string; name: string };
  active: boolean;
  onClick: () => void;
};

export default function GPTTab({ gpt, active, onClick }: GPTProps) {
  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded \${active ? "bg-black text-white" : "bg-gray-200"}\`}
    >
      {gpt.name}
    </button>
  );
}
