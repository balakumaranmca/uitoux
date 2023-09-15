import {userConnection} from "./mongoose";


import dotenv from "dotenv";

dotenv.config();
const ispord = false; // need to handle .env /later

const mongodbCredens : any = {
    host:process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    db:process.env.MONGODB_DB,
    username:process.env.MONGODB_USERNAME,
    password:process.env.MONGODB_PASSWORD,
    repelSet:"",
    readPref:""

};

 const dbConnection = userConnection(ispord,mongodbCredens);

export default dbConnection;

export const userConnction = async()=>{
    console.log("sample connection established");

};