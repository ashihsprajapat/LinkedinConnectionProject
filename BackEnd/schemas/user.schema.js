import mongoose,{Schema} from "mongoose";


const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    active:{
        type:String,
        default:true,
    },
    password:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    token:{
        type:String,
    },
    profilePictur:{
        type:String,
        default:"https://tse4.mm.bing.net/th?id=OIP.3U017h9GAnFM3aRkV-WLiwHaHa&pid=Api&P=0&h=180",
    },

})

export default userSchema;