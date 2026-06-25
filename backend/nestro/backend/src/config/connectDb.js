import mongoose from "mongoose";

async function connectDB() {
    try {
        const respose = await mongoose.connect(process.env.DATABASE_URL);
        console.log("DataBase  connected")

    } catch (error) {
        process.exit(1)
    }
}

export default connectDB;