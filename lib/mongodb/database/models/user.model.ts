import { freePlanCredits } from "@/constants";
import { model, models, Schema } from "mongoose";

const UserSchema=new Schema({
    clerkId:{type:String, required:true, unique:true},
    email:{type:String, required:true,unique:true},
    username:{type:String, required:true, unique:true}, 
    photo:{type:String, required:true},
    firstName:{type:String},
    lastName:{type:String},
    planId:{type:Number},
    creditBalance:{type:Number,default:freePlanCredits}
})

const User=models?.User||model("User",UserSchema);

export default User;