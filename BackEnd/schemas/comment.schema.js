import mongoose,{Schema} from "mongoose";
import { User } from "../models/user.model.js";
import { Post } from "../models/post.model.js";


export const commentSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:User,
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref:Post,
    },
    body:{
        type:String,
        required:true,
    }

});