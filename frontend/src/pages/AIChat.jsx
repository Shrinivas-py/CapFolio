import { useState } from "react";
import api from "../api";
import AIMessage from "../components/AIMessage";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    const userMsg = { role: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await api.post("/chat", { message: userMsg.text });

      const aiMsg = {
        role: "ai",
        data: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ AI is currently unavailable." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col">
      <div className="p-6 border-b border-purple-500/20 text-center">
        <h2 className="text-3xl font-bold text-purple-400">
          CapFolio AI Assistant
        </h2>
        <p className="text-gray-400 text-sm">
          Real-time stock intelligence powered by AI
        </p>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-md bg-purple-600 p-4 rounded-2xl rounded-br-none">
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-start">
              <div className="max-w-xl bg-gray-900 p-6 rounded-2xl border border-purple-500/30">
                <AIMessage data={msg.data || msg.text} />
              </div>
            </div>
          )
        )}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-900 p-4 rounded-xl animate-pulse">
              Thinking...
            </div>
          </div>
        )}
      </div>
      <div className="p-6 border-t border-purple-500/20 flex gap-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about TATA MOTORS, RELIANCE, NSE today..."
          className="flex-1 p-3 rounded-xl bg-black border border-purple-500/30 focus:outline-none"
        />

        <button
          onClick={askAI}
          className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition font-semibold"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default AIChat;
