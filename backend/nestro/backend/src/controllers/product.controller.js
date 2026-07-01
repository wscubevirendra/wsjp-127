import ProductModel from "../models/product.model.js";
import { sendCreated, sendConflict, sendNotFound, sendServerError, sendSuccess } from "../utils/response.js";

const create = async (req, res) => {
    try {
        const image_url = req.file.path
        console.log(req.body)
        const product = await ProductModel.findOne({ name: req.body.name });
        if (product) return sendConflict(res,)
       await ProductModel.create({
            ...req.body,
            thumbnail: image_url
        });

        return sendCreated(res)

    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}

const read = async (req, res) => {
    try {
        const products = await ProductModel.find();

        return res.status(200).json({
            message: "Product data find",
            success: true,
            products: products
        })


    } catch (error) {
        return sendServerError(res)
    }
}



const readById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await ProductModel.findById({ _id: id });
        if (!product) return sendNotFound(res)

        return res.status(200).json({
            message: "Product data find",
            success: true,
            product
        })


    } catch (error) {
        return sendServerError(res)
    }
}


const statusUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById({ _id: id });
        if (!product) return sendNotFound();
        await ProductModel.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    status: !product.status
                }
            }
        )

        return sendSuccess(res, "Status update successfully")

    } catch (error) {
        return sendServerError(res)
    }

}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById({ _id: id });
        if (!product) return sendNotFound();
        await ProductModel.findByIdAndDelete({ _id: id });
        return sendSuccess(res, "Category delete")
    } catch (error) {
        return sendServerError(res)
    }

}

export {
    create,
    read,
    statusUpdate,
    deleteById,
    readById
}