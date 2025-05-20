const mongoose= require('mongoose')
const Schema=mongoose.Schema

// mongoose.connect('mongodb://127.0.0.1:27017/campground')
// .then(()=>console.log("mongoose connected"))
// .catch((err)=>console.log("Error in moongoose,err"))

//mongoose.Schema
const CampgroundSchema= new Schema({
title: {
  type:String,
  required:true
},
image: {
  type:String,
  
},
price:{
  type:Number,
},
description:{
  type:String
},
location:{
  type:String
}

})

// module.exports=mongoose.model('Campground',CampgroundSchema)
const Campground=mongoose.model('Campground',CampgroundSchema)

module.exports=Campground;

