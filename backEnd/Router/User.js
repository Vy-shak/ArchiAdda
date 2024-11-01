import { Router } from "express";
import mongoose from "mongoose";
import { userModel } from "../Db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const { phoneNo, fullname, username, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 8);
    try {
        const upload = await userModel.create({
            phoneNo: phoneNo,
            fullname: fullname,
            username: username,
            password: hashedPass
        })
    } catch (error) {
        return res.send({
            msg1: "some error happend while uploading to db ",
            msg2: error
        })
    }
    return res.send({
        msg: "Signup success"
    })
})

userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const find = await userModel.findOne({
            username: username,
        });
        const result = await bcrypt.compare(password, find.password);

        console.log(find, result)
        if (result && find) {
            const token = jwt.sign({
                id: find._id.toString()
            }, process.env.JWT_KEY,);

            if (token) {
                return res.send({
                    token: token
                })
            }
        }

    } catch (error) {
        return res.send({
            msg: "some problem in finding your account",
            err: error
        })
    }
})

export { userRouter }