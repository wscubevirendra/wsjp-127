import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
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
    image: {
        type: String,
        default: null
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

const CategoryModel = mongoose.model("category", categorySchema);
export default CategoryModel;