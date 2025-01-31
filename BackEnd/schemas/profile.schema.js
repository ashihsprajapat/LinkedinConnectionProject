
import { mongoose, Schema,model } from 'mongoose';
import { User } from './../models/user.model.js';

const educationSchema=new Schema({
    schoole:{
        type:String,
        default:"",
    },
    degree:{
        type:String,
        default:"",
    },
    fieldOfStudy:{
        type:String,
        default:"",
    }
})
//const Eduction=model("Education",educationSchema);

const workSchema=new Schema({
    company:{
        type:String,
        default:"",
    },
    position:{
        type:String,
        default:'',
    },
    years:{
        type:String,
        default:'',
    }

})
//const Work=model("Work",workSchema);


export const profileSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:User,
    },
    bio:{
        type:String,
        default:'',

    },
    pastWork:{
        type:[workSchema],
        default:[],
    },
    education:{
        type:[educationSchema],
        default:[],
    }

})

