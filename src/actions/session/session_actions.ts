'use server'
import { IronSession, SessionOptions, getIronSession } from "iron-session";
import { SessionDataType } from "@/types/session/SessionTypes";
import { cookies } from "next/headers";
import ProfileModel from "@/app/api/db/models/profile";
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import dbConnect from "@/app/api/db/connect";

const sessionOptions:SessionOptions = {
    cookieName: "session",
    password: process.env.SESSION_SECRET_KEY!,
    cookieOptions:{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production'
    }
}
const defaultSession:SessionDataType = {
    isLoggedIn:false
}
export const getSession = async ():Promise<IronSession<SessionDataType>> => {
    const session = await getIronSession<SessionDataType>(cookies(),sessionOptions)
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn
    }
    return session
} 

export const getSessionClient = async () => {
    const session = await getSession()
    return JSON.stringify({isLoggedIn:session.isLoggedIn, username:session.username})
}

export const login = async (username:string, password:string) =>{
    const session:IronSession<SessionDataType> = await getSession()
    if(!mongoose.connection.readyState){
        await dbConnect()
    }
    const dbData = await ProfileModel.findOne({username:username})
    await mongoose.disconnect()
    if(!dbData){
        return Response.json({status:400, message:'user not found'})
    }
    
    const match:boolean = await bcrypt.compare(password, dbData.password)
    if(!match){
        return Response.json({status:400, message:'wrong password'})
    }
    session.userID = dbData._id
    session.username = dbData.username
    session.isLoggedIn = true
    await session.save()
    redirect('/')
}

export const logout = async () => {
    const session = await getSession()
    session.destroy()
    redirect('/')
}