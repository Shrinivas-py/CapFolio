import axios from "axios";

export const getTopGainers = async () => {
  const res = await axios.get(
    "https://www.nseindia.com/api/live-analysis-variations?index=gainers",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    }
  );
  return res.data;
};
