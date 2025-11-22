import express from "express";
import {
  saveCriteria,
  getCriteria
} from "../controllers/criteresController.js";

const router = express.Router();

router.post("/save", saveCriteria);
router.get("/user/:id", getCriteria);

export default router;
