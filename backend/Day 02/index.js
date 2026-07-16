import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routers/student.router.js";
const server = express();
server.use(express.json());
server.use("/api/student",studentRouter)


// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/collage")
.then(() => {
    console.log("Database Connected");

    server.listen(5000, () => {
        console.log("Server Running on Port 5000");
    });
})
.catch(() => {
    console.log("Database Not Connected");
});