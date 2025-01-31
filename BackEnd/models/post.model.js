import mongoose,{model} from "mongoose";
import { postSchema } from './../schemas/post.schema.js';

export const Post=model("Post",postSchema);

