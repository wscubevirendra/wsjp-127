import StudentModel from "../models/student.model.js";


const create = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const student = await StudentModel.findOne({ email });
        if (student) {
            return res.status(409).json({
                message: "Student Id Already Exist",
                success: false
            })
        }


        await StudentModel.create({
            name, age, email
        })
        res.status(201).json({
            message: "Create Sucessfully",
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}



const read = async (req, res) => {
    try {
        const students = await StudentModel.find();
        const count = await StudentModel.find().countDocuments()
        res.status(200).json({
            message: "Data Find",
            success: true,
            students,
            total: count
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


const readById =async (req, res) => {
    try {
        const { id } = req.params;
        const student = await StudentModel.findById(id);
        res.status(200).json({
            message: "Data Find",
            success: true,
            student
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


const deleteById = async (req,res) => {
    try {
        const { id } = req.params
        await StudentModel.findByIdAndDelete(id)
        res.status(200).json({
            message: "Student Accound Delete",
            success: true,

        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const statusUpdate =async (req, res) => {
    try {
        const { id } = req.params;
        const student = await StudentModel.findById(id);
        await StudentModel.updateOne(
            { _id: id },
            {
                $set: {
                    status: !student.status
                }
            }
        )

        res.status(200).json({
            message: "Student Accound Update",
            success: true,

        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


export {
    create, read, readById, statusUpdate, deleteById
}