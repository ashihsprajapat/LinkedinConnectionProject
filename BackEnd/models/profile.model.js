import mongoose,{model} from "mongoose";
import { profileSchema } from "../schemas/profile.schema.js";
export const Profile=model("Profile",profileSchema)