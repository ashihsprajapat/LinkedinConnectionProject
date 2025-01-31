
import { User } from '../models/user.model.js';
import { mongoose, Schema } from 'mongoose';

export const postSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
    body: {
        type: String,
        required: true,

    },
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    media: {
        type: String,
        default: "",

    },
    fileType: {
        type: String,
        default: '',

    },
    active: {
        type: Boolean,
        default: true,
    },
})

export default postSchema;
