import { getTopGainers } from "../services/nseService.js";

export const fetchTopGainers = async (req, res) => {
  try {
    const data = await getTopGainers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "NSE data not found!" });
  }
};
