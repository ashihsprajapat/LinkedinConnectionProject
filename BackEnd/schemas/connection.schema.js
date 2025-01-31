

import mongoose,{Schema} from "mongoose";
import { User } from "../models/user.model";

export const connectionSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:User,
    },
    connectionId:{
        type:Schema.Types.ObjectId,
        ref:User,
    },
    status_acceptd:{
        type:Boolean,
        default:null,
    }

})