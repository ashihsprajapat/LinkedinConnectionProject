import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


//user and post model 
import { User } from "./models/user.model.js";
import { Post } from "./models/post.model.js";
import { Comments } from "./models/comments.model.js";


const app = express();
app.use(cors());
app.use(express.json());



const db_url2 = "mongodb://127.0.0.1:27017/LinkedinMERN"
const DB_url = process.env.DB_URL || db_url2;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("app is listing on port", PORT)
})
const start = async () => {
    const connectDB = await mongoose.connect(DB_url);
    console.log("connect to database ")
}
start();

//base rout
app.get("/",(req,res)=>{
    res.send("ok working")
})

//user route
import userRoute from "./routes/user.routes.js"
app.use(userRoute);

//post route
import postRoute from "./routes/post.routes.js"
app.use( postRoute);

