import mongoose from "mongoose"
import dbConnect from "./connect"

export async function GET(){
    await dbConnect()
    if(!mongoose.connection.readyState){
        return Response.json({status:500, message:'problem connecting to db', readyState:mongoose.connection.readyState})
    }
    return Response.json({status:200})
}