import mongoose, { Model } from "mongoose";
import profileSchema from "../schemas/profile";

let ProfileModel:mongoose.Model<any, {}, {}, {}, any, any>

if(!mongoose.models.profiles){
    ProfileModel = mongoose.model('profiles', profileSchema)
}else{
    ProfileModel = mongoose.models.profiles
}



export default ProfileModel
