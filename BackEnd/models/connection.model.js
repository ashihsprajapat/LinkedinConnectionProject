
import mongoose, { model } from "mongoose";
import { connectionSchema } from "../schemas/connection.schema.js";

export const Connection = model("Connection", connectionSchema);