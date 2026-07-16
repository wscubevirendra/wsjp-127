import UserModel from "../models/user.model.js";
import { sendServerError } from "../utils/response.js";
import jwt from "jsonwebtoken"

async function protect(req, res, next) {
    try {
        let token = null;
        if (req.cookies && req.cookies.jwt) {
            token = req.cookies.jwt
        }

        if (!token && req.headers.authorization) {
            token = req.headers.authorization
        }

        if (token == null) {
            return res.status(401).json({
                message: "unauthorized",
                success: false
            })

        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await UserModel.findById(decoded.id).select("-password ")

        req.user = user


        next()
    } catch (error) {
        return sendServerError(res)
    }
}


const authorized = (...roles) => {
    return (req, res, next) => {
        console.log(req.user)
        console.log(roles)
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "forbidden",
                success: false
            })

        }
        next()

    }
}


export { protect, authorized }