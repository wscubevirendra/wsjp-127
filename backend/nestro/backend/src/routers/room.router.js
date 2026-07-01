import express from "express";
import { create, deleteById, read, statusUpdate, readById, edit } from "../controllers/room.controller.js"

const router = express.Router();


router.post("/create", create)
router.put("/edit/:id", edit)
router.get("/", read)
router.delete("/delete/:id", deleteById)
router.patch("/status-update/:id", statusUpdate)
router.get("/:id", readById)

export default router;