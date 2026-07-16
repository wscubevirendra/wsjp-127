import express from 'express';
import { create, deleteById, read, readById, updateById } from '../controllers/student.controller.js';
const router=express.Router();


router.post("/create",create);
router.get("/",read);
router.get("/:id",readById);
router.patch("/update/:id",updateById);
router.delete("/delete/:id",deleteById)


export default router