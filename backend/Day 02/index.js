import express from "express";
import mongoose from "mongoose";
const server = express();
import studentRouter from "./routers/student.router.js";
server.use(express.json())
server.use("/api/student",studentRouter)


mongoose.connect("mongodb://localhost:27017/collage").then(
    () => {
        console.log("DataBase Connected")

        server.listen(5000, () => {
            console.log("Server is running port number 5000")
        })
    }
).catch(() => {
    console.log("DataBase not connected")
})


