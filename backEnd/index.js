import express, { urlencoded } from "express";
import { userRouter } from "./Router/User.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();




const app = express();

app.use(express.urlencoded());
app.use(express.json())
app.get("/", (req, res) => {
    res.send({
        msg: "your are reached on the web"
    })
})


app.use("/user", userRouter)



app.listen(3000, (req, res) => {
    console.log("server started on port 3000")
})

mongoose.connect(`mongodb+srv://vyshakn:${process.env.DB_PASS}@cluster0.twxk2.mongodb.net/ArchiAdda`)
