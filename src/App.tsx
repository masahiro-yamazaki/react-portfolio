import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const send = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    if (!res.ok) {
      const t = await res.text();
      throw new Error(`API ${res.status}: ${t}`);
    }

    const data = await res.json();
    setAnswer(data.text);
  };

  return (
    <div style={{ padding: 40 }}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={send}>送信</button>
      <pre>{answer}</pre>
    </div>
  );
}
