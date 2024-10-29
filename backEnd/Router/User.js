import { Router } from "express";
import mongoose from "mongoose";
import { userModel } from "../Db.js";


const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const { phoneNo, fullname, username, password } = req.body;

    try {
        const upload = await userModel.create({
            phoneNo: phoneNo,
            fullname: fullname,
            username: username,
            password: password
        })
    } catch (error) {
        return res.send({
            msg1: "some error happend while uploading to db ",
            msg2: error
        })
    }
})

userRouter.post("/signin", (req, res) => {
    return res.send({
        msg: "signin post req"
    })
})

export { userRouter }