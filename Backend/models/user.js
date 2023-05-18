const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordcompexity = require("joi-password-complexity");
const usermodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const wishlist = new mongoose.Schema({
  name:{
    type:String,
  },
  title: {
    type: String,
    
  },
  image: {
    type: String,
  },
  source: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
});
// usermodel.methods.generateAuthToken=function(){
//     const token=jwt.sign({_id:this.id}.process.env.JWTPRIVATEKEY,{
//         expiresin:"7D"
//     })
//     return token;
// }
// const validate=(data)=>{
//     const schema=joi.object({
//         name:joi.string().required().label("First Name"),
//         email:joi.string().required().label("First Name"),
//         password:joi.string().required().label("First Name"),
//     });
//     return schema.validate(data);
// }

const model = mongoose.model("userdata", usermodel);
const model2 = mongoose.model("wishlist", wishlist);
module.exports = { model, model2 };
