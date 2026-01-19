import { askGemini } from "../services/geminiService.js";
import { getTopGainers } from "../services/nseService.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ reply: "Please ask a valid question." });
    }
    let marketData = [];
    try {
      marketData = await getTopGainers();
    } catch (err) {
      console.log("NSE data fetch failed");
    }

    const prompt = `${message}`;

    const reply = await askGemini(prompt);

    res.json({ reply });

  } catch (error) {
    console.error("AI Chat Error:", error.message);
    res.status(500).json({
      reply: "AI service is temporarily unavailable. Please try again later."
    });
  }
};
