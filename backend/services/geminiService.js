import axios from "axios";

export const askGemini = async (message) => {
  const response = await axios.post(
    process.env.N8N_WEBHOOK_URL,
    {
      message: message
    }
  );

  return response.data;
};
