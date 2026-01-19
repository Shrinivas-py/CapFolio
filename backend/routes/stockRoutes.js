import express from "express";
import { fetchTopGainers } from "../controllers/stockController.js";

const router = express.Router();

router.get("/top-gainers", fetchTopGainers);

export default router;
