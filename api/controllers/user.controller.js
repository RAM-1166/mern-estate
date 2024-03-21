import User from "../models/user.module.js";
import bcryptjs from 'bcryptjs';
export const test=(req,res)=>{
    res.json({
        message :'API route is working!',
    });
};