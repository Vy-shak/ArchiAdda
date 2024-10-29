import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
    phoneNo: { type: Number, unique: true },
    fullname: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
});


const userModel = mongoose.model("user", userSchema)



export { userModel }

