import mongoose from "mongoose"
import ProfileModel from "../db/models/profile"
import dbConnect from "../db/connect"
import bcrypt from 'bcrypt'
export async function POST(req:Request){
    if(!mongoose.connection.readyState){
        const res = await dbConnect()
    }
    const reqData = await req.json()
    

    if(!reqData.username){
        return Response.json({status:400, message:'no username'})
    }
    if(!reqData.password){
        return Response.json({status:500, message:'no password'})
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(reqData.password, salt)

    await ProfileModel.create({username:reqData.username, password:hash})
    await mongoose.disconnect()
  
    return Response.json({})
}