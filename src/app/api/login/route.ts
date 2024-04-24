
import { login } from "@/actions/session/session_actions"
import ProfileModel from "../db/models/profile"
import bcrypt from 'bcrypt'
export async function POST(req:Request){
    const reqData = await req.json()
    if(!reqData.username || !reqData.password){
        return Response.json({status:400, message:'no username or password'})
    }

    

    let res = await login(reqData.username, reqData.password)

    return Response.json({status:200})
}