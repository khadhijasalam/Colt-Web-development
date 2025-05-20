
// install mongoose
// require mongoose
// connect mongoose
// create Schema
// create model of that Schema
// create product using that model
// save the pdt .( use await async when in function)

const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/fDB')
.then(()=>console.log('connected'))
  .catch(error => console.log(error))

const farmSchema= new mongoose.Schema({
  name:String,
  price:Number
})

const Product= mongoose.model('Product',farmSchema)
// Product.insertMany({
//   name:"Carrot",
//   price: 12
// })
    // Create a new product instance
// const pdt = new Product({
//       name: "Carrot",
//       price: 12
//     });

    // Save the product to the database
 pdt.save();
// pro.save()
console.log(pdt)