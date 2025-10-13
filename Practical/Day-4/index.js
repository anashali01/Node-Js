import express from "express";
import dotenv from "dotenv";
import {db} from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8101;

//! Error Route
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running on localhost:${port}`);
    }else{
        console.log(`Error`);
    }
}) 