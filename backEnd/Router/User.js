import { Router } from "express";


const userRouter = Router();

userRouter.post("/signup", (req, res) => {
    return res.send({
        msg: "signup post req"
    })
})

userRouter.post("/signin", (req, res) => {
    return res.send({
        msg: "signin post req"
    })
})

export { userRouter }