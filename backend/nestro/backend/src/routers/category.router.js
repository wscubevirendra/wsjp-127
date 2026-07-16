import express from "express";
import { create, deleteById, read, statusUpdate, readById, edit } from "../controllers/category.controller.js"

const router = express.Router();
import upload from "../middleware/multer.js";
import { authorized, protect } from "../middleware/auth.js";


router.post("/create", protect,authorized("admin","superadmin"),upload.single("image"), create)
router.put("/edit/:id",  protect,authorized("admin","superadmin"),upload.single("image"), edit)
router.get("/", protect,read)
router.delete("/delete/:id", deleteById)
router.patch("/status-update/:id", protect,authorized("admin","superadmin"),statusUpdate)
router.get("/:id", readById)

export default router;