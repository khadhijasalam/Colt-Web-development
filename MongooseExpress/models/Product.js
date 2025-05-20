
const mongoose= require('mongoose')

const productSchema= new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    price: {
      type:Number,
      required:true,
      min:0

    },
    category: {
      type:String,
      lowercase: true,
      enum: ['fruit','vegetable','dairy','fungi','seeds']
    }


  }
)

//create new model
const Product = mongoose.model('Product',productSchema);

//export this file
module.exports=Product;
