import express from "express";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import { User } from "./models/user.modal.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8101;
app.use(bodyParser.urlencoded({ extended: true }));

//! Create User Route
app.post('/user/create', (req, res) => {
    User.create(req.body)
        .then((data) => {
            return res.json(data);
        })
        .catch((error) => {
            return res.json(error.message);
        })
});

//! GetallUser Route 
app.get('/user/getAllUser', (req, res) => {
    User.find({})
        .then((data) => {
            return res.json(data)
        })
        .catch((error) => {
            return res.json({ message: error.message });
        })
})

//! Delete User Route
app.get('/user/delete/:id' , (req , res)=>{
    const {id} = req.params;
    User.findByIdAndDelete(id)
    .then((data)=>{
        return res.json({message : "User Deleted!",data})
    })
    .catch((error)=>{
        return res.json({message : error.message})
    })
}) 

//! Update User Route 
app.post('/user/update/:id' , (req,res)=>{
    const {id} = req.params;
    User.findByIdAndUpdate(id,req.body)
    .then((data)=>{
        return res.json({message : "User Updated!"})
    })
    .catch((error)=>{
        return res.json({message:error.message})
    })
})
//! Error Route
app.listen(port, (err) => {
    if (!err) {
        console.log(`Server is running on http://127.0.0.1:${port}`);
    } else {
        console.log(`Error`);
    }
}) 