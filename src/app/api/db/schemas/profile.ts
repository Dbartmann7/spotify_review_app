import mongoose from "mongoose";
const {Schema} = mongoose

const profileSchema = new Schema({
    username:String,
    password: String
})

export default profileSchema