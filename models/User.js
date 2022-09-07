 import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const UserSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please Provide name'],
        minlength:3,
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true,'Please Provide email'],
        validate:{
            validator:validator.isEmail,
            message:'please provide a valid mail'
        },
       unique:true
    },    password:{
        type:String,
        required:[true,'Please Provide password'],
       minlength:6,
       select:false
    },
    lastName:{
        type:String, 
        trim:true,
        maxlength:20,
        default:'lastName',
    },
    location:{
        type:String, 
        trim:true,
        maxlength:20,
        default:'my city',
    },
    
    

})


UserSchema.pre('save',async function()
{
 
    let salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);



})

UserSchema.methods.createJWT=function(){


return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})

}



export default  mongoose.model('User',UserSchema);
