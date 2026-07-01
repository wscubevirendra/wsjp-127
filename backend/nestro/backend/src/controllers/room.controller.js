import RoomModel from "../models/room.model.js";
import { sendCreated, sendConflict, sendNotFound, sendServerError, sendSuccess, sendBadRequest } from "../utils/response.js";

const create = async (req, res) => {
    try {
        const { name, slug } = req.body;
        if (!name || !slug) return sendBadRequest(res);
        const room_type = await RoomModel.findOne({ name: name });
        if (room_type) return sendConflict(res)
        await RoomModel.create({ name, slug })
        return sendCreated(res);

    } catch (error) {
        return sendServerError(res)
    }
}


const edit = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug } = req.body;
        const update = {};
        const room_type = await RoomModel.findById({ _id: id });
        if (!room_type) return sendNotFound(res)
        if (name) {
            update.name = name;
            update.slug = slug
        }

        await RoomModel.updateOne(
            { _id: id },
            { $set: update }
        )
        return sendSuccess(res);


    } catch (error) {
        return sendServerError(res)
    }
}


const read = async (req, res) => {
    try {
        const room_type = await RoomModel.find();

        return res.status(200).json({
            message: "Room type data find",
            success: true,
            rooms: room_type
        })


    } catch (error) {
        return sendServerError(res)
    }
}

const readById = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await RoomModel.findById({ _id: id });
        if (!room) return sendNotFound(res)

        return res.status(200).json({
            message: "room_type data find",
            success: true,
            room
        })


    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}


const statusUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await RoomModel.findById({ _id: id });
        if (!room) return sendNotFound();
        await RoomModel.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    status: !room.status
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
        const room = await RoomModel.findById({ _id: id });
        if (!room) return sendNotFound();
        await RoomModel.findByIdAndDelete({ _id: id });
        return sendSuccess(res, "Room delete")
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