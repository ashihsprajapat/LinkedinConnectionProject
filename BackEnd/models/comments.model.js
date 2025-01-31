import mongoose,{model} from "mongoose";
import { commentSchema } from "../schemas/comment.schema.js";


export const Comments =model("Comments",commentSchema);