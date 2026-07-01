import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

const RoomModel = mongoose.model("room", roomSchema);
export default RoomModel;