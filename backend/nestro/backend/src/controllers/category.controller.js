import CategoryModel from "../models/category.model.js";
import { sendCreated, sendConflict, sendNotFound, sendServerError, sendSuccess } from "../utils/response.js";

const create = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const image_url = req.file.path

        const category = await CategoryModel.findOne({ name: name });
        if (category) return sendConflict(res,)
        await CategoryModel.create({ name, slug, image: image_url })
        return sendCreated(res)

    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}


const edit = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug } = req.body;
        const image_url = req.file ? req.file.path : null;
        const update = {};
        const category = await CategoryModel.findById({ _id: id });
        if (!category) return sendNotFound(res)
        if (name) {
            update.name = name;
            update.slug = slug
        }

        if (image_url) {
            update.image = image_url
        }

        await CategoryModel.updateOne(
            { _id: id },
            { $set: update }
        )
        return sendSuccess(res);


    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}


const read = async (req, res) => {
    try {
        const query = req.query;
        const limit=query.limit ? parseInt(req.query.limit) : 0;
        const filter = {};
        if (query.status) filter.status = query.status === "true"

        const category = await CategoryModel.find(filter).limit(limit);

        return res.status(200).json({
            message: "Category data find",
            success: true,
            categories: category
        })


    } catch (error) {
        return sendServerError(res)
    }
}

const readById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await CategoryModel.findById({ _id: id });
        if (!category) return sendNotFound(res)

        return res.status(200).json({
            message: "Category data find",
            success: true,
            category
        })


    } catch (error) {
        return sendServerError(res)
    }
}


const statusUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById({ _id: id });
        if (!category) return sendNotFound();
        await CategoryModel.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    status: !category.status
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
        const category = await CategoryModel.findById({ _id: id });
        if (!category) return sendNotFound();
        await CategoryModel.findByIdAndDelete({ _id: id });
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
    readById,
    edit
}