
const mongoose=require('mongoose')
const Product= require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
  console.log("Mongo Connection Open!!")
})
.catch(err=>{
  console.log("Oh No mongo connection error!!")
  console.log(err)
});

const initialData = [
  {
      name: "Fairy Eggplant",
      price: 1.00,
      category: "vegetable"
  },
  {
      name: "Organic Goddess Melon",
      price: 4.99,
      category: "fruit"
  },
  {
      name: "Organic Mini Seedless Watermelon",
      price: 3.99,
      category: "fruit"
  },
  {
      name: "Organic Celery",
      price: 1.50,
      category: "vegetable"
  },
  {
      name: "Chocolate Whole Milk",
      price: 2.69,
      category: "dairy"
  }
];


// ##running it again will insert the data again id it is not commented

// Product.insertMany(initialData)
// .then(r=>console.log(r)).catch(err=>console.log(err))