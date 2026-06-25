import express from "express";
import { create, deleteById, read, readById, statusUpdate } from "../controllers/student.js";
const router=express.Router();

router.get("/",read);
router.post("/create",create);
router.get("/:id",readById);
router.patch("/update/:id",statusUpdate);
router.delete("/delete/:id",deleteById);

export default router;