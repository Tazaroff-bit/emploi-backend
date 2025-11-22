import express from "express";
import { getOffres } from "../controllers/offresController.js";

const router = express.Router();

router.get("/", getOffres);

export default router;
