import express from "express";
import { create, deleteById, read, statusUpdate,readById, } from "../controllers/product.controller.js"

const router = express.Router();
import upload from "../middleware/multer.js";

router.post("/create", upload.single("image"), create)
router.get("/", read)
router.delete("/delete/:id", deleteById)
router.patch("/status-update/:id", statusUpdate)
router.get("/:id", readById)

export default router;