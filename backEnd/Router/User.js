import { Router } from "express";
import { userModel } from "../Db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { val } from "../Auth/Zodvalidation.js";


const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const { phoneNo, fullname, username, password } = req.body;

    const checkVal = val.safeParse(req.body);

    if (checkVal.success) {
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
    }
    else {
        return res.send({
            err: checkVal.error
        })
    }

})

userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    try {
        const find = await userModel.findOne({
            username: username,
        });
        const result = await bcrypt.compare(password, find.password);
        if (!result) {
            return res.send({
                err: "password is not correct"
            })
        };

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
            msg: "wrong credentials",
            err: error
        })
    }
})

export { userRouter }