import StudentModel from "../models/student.model.js";



const create= async(req,res)=>{
     try {
        const { name, email, age } = req.body;

        const student = await StudentModel.findOne({ email });

        if (student) {
            return res.status(409).json({
                message: "Student Email Already Exists",
                success: false
            });
        }

        await StudentModel.create({
            name,
            email,
            age
        });

        res.status(201).json({
            message: "Student Created Successfully",
            success: true
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }

}


const read= async(req,res)=>{
      try {
        const students = await StudentModel.find();
        const count = await StudentModel.countDocuments();

        res.status(200).json({
            message: "Students Found",
            success: true,
            total: count,
            students
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }

}

const readById= async(req,res)=>{
     try {
        const { id } = req.params;

        const student = await StudentModel.findById(id);
        console.log(student)

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found",
                success: false
            });
        }

        res.status(200).json({
            message: "Student Found",
            success: true,
            student
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }

}

const deleteById= async(req,res)=>{
     try {
            const { id } = req.params;
    
            await StudentModel.findByIdAndDelete(id);
    
            res.status(200).json({
                message: "Student Deleted Successfully",
                success: true
            });
    
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                success: false
            });
        }

}

const updateById= async()=>{
      try {
            const { id } = req.params;
    
            const student = await StudentModel.findById(id);
    
            if (!student) {
                return res.status(404).json({
                    message: "Student Not Found",
                    success: false
                });
            }
    
            await StudentModel.updateOne(
                { _id: id },
                {
                    $set: {
                        status: !student.status
                    }
                }
            );
    
            res.status(200).json({
                message: "Student Updated Successfully",
                success: true
            });
    
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                success: false
            });
        }

}

export {
    create,
    read,
    readById,
    deleteById,
    updateById
}