const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
    },
    profileURL: {
        type:String,
        default:"https://res.cloudinary.com/dfmrenz0g/image/upload/v1725126444/profile_e0ehtz.png"
    },
    profile_public_id :{
        type:String
    },
    role: {
        type:String,
        enum:["User","Admin"],
        default:"User"
    },

    resetToken: {
        type:String
    },
    resetTokenExpiry:{
        type:Date
    },
    isActivated :{
        type:Boolean,
        default:false
    },
    activationToken:{
        type:String
    },
    activationTokenExpiry:{
        type:Date
    }
},{timestamps:true})




const User = mongoose.model("User",userSchema)

module.exports = User;