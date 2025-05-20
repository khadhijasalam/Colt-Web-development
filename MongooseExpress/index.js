const express = require("express");
const app = express();
const path = require("path");
const methodOverride=require('method-override')


const mongoose = require("mongoose");


const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongo Connection Open!!");
  })
  .catch((err) => {
    console.log("Oh No mongo connection error!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//
categories=['fruit','vegetable','seeds','fungi','dairy']

//Routers

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  // console.log(products)
  // res.send("All products will be here")
  res.render("products/index", { products });
});

//form for adding new products

//note: this should be before :id cause it executes in order...nd product/new doesnt look like id

app.get("/products/new", (req, res) => {
  res.render("products/new",{categories});
});

//you need to parse before saving req,body
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(`product Saved ${newProduct}`);
  res.redirect("products");
});


app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/details", { product });
  
});

// updating using form
app.get('/products/:id/edit',async (req,res)=>{

  const {id} =req.params
  const product = await Product.findById(id)
  res.render('products/edit',{product})
  // res.send("hey feom edit")
})

app.put('/products/:id',async (req,res)=>{
  const {id}=req.params
  const product= await Product.findByIdAndUpdate(id,req.body,{runValidators:true, new:true} )
  res.redirect(`/products/${product._id}`)

// console.log(req.body)
// res.send("PUTT")

})

app.delete('/products/:id',async (req,res)=>{
  const {id}=req.params
  const dltProduct= await Product.findByIdAndDelete(id)
  res.redirect('/products')
// res.send("Delted")
})





//starting server
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
