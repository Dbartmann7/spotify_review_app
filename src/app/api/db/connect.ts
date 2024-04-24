import mongoose from "mongoose";

export default async function dbConnect(){
    if(!mongoose.connection.readyState){
        await mongoose.connect(process.env.MONGO_URI!) 
    }
    
    
    return mongoose.connection.readyState

}