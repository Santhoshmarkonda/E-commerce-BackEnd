import express from "express";
import { getCart, saveCart, clearCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCart);
router.put("/", authMiddleware, saveCart);
router.delete("/", authMiddleware, clearCart);

export default router;