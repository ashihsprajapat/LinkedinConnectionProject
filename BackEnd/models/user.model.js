import { mongoose,model } from "mongoose";
import userSchema from "../schemas/user.schema.js";

export const User=model("User",userSchema);
