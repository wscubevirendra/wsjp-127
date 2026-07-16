import UserModel from "../models/user.model.js";
import { sendCreated, sendConflict, sendNotFound, sendServerError, sendSuccess, sendBadRequest } from "../utils/response.js";
import Cryptr from "cryptr"
import sendOtpMail from "../utils/sendOtpMail.js";
const cryptr = new Cryptr(process.env.SECRET_KEY);
import { generateToken } from "../utils/helper.js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return sendBadRequest(res);
        const user = await UserModel.findOne({ email });
        if (user) return sendConflict(res, "Accound already exist")
        const encrypte_password = cryptr.encrypt(password);
        const otp = Math.floor(Math.random() * 100000 + 900000);
        const otpExpire = Date.now() + 3 * 60 * 1000
        await sendOtpMail(email, otp)
        await UserModel.create({ name, email, password: encrypte_password, otp, otpExpire })
        return sendCreated(res, "User accound create successfully");

    } catch (error) {
        return sendServerError(res)
    }
}
// controllers/auth.controller.js

 const logout = async (req, res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const verify_otp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) return sendBadRequest(res);
        if (otp != user.otp) return sendBadRequest(res, "invalid otp");
        if (user.otpExpire < Date.now()) return sendBadRequest(res, "otp exp.")
        user.isVerified = true
        user.otp = undefined
        user.otpExpire = undefined;
        await user.save();
        return sendSuccess(res, "otp verfiy successfully");

    } catch (error) {
        return sendServerError(res)

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return sendBadRequest(res);
        const user = await UserModel.findOne({ email });
        if (!user) return sendNotFound(res, "Accound already exist")
        const decryptedPass = cryptr.decrypt(user.password);
        if (decryptedPass != password) {
            return sendBadRequest(res)
        }
        const token = generateToken(user.id)

        res.cookie('jwt', token, {
            maxAge: 30 * 24 * 60 * 60 * 1000,       // Expiration time in milliseconds (15 minutes)
            httpOnly: true,       // Prevents client-side JS from reading the cookie (protects against XSS)
            secure: false,         // Ensures cookie is only sent over HTTPS connections
            sameSite: 'strict'    // Controls cross-site request behavior ('strict', 'lax', or 'none')
        });
        return sendSuccess(res, "login successfully")

    } catch (error) {
        return sendServerError(res)
    }
}

const getMe = async (req, res) => {
    try {
        const user = req.user || []
        res.status(200).json({
            message: "User find",
            success: true,
            user
        })

    } catch (error) {
        return sendServerError(res)
    }
}

const read = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}


const readById = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}

const edit = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}

const deleteById = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}

const statusUpdate = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}

const updatePassword = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}

const updateProfile = async (req, res) => {
    try {
        console.log(req)

    } catch (error) {
        return sendServerError(res)
    }
}





export {
    register,
    login,
    read,
    readById,
    edit,
    deleteById,
    statusUpdate,
    updatePassword,
    updateProfile,
    verify_otp,
    getMe,
    logout
}