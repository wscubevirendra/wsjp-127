import dotenv from "dotenv"
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/connectDb.js";
import categoryRouter from "./routers/category.router.js";
import roomRouter from "./routers/room.router.js";
import productRouter from "./routers/product.router.js";
const server = express();
const PORT = process.env.PORT
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(cors({origin:"http://localhost:3000"}))



server.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is healthy",
        success: true
    })
})

server.use("/api/category", categoryRouter);
server.use("/api/room-type", roomRouter);
server.use("/api/product", productRouter);

server.listen(PORT, () => {
    connectDB()
    console.log(`Server is running port number ${PORT}`)
})