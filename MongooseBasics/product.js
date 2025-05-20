const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product')
.then(()=>console.log('connected'))
  .catch(error => console.log(error))


const productSchema= new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
// price:Number is shorthand prop
    price:{
      type:Number,
      min:0
    }
  }
);

//instance methods
productSchema.methods.greet=function(){

  console.log("HEYY HOW R U")
  //this here means only the instance of the Product model. not the actual Product model
  console.log(`-- from ${this.price}`)
}

productSchema.methods.toggleOnSale= function(){
  this.onSale=!this.onSale;

  // .save() is asynchronous (thennable), have to awat it somewhere else

  return this.save()
}


//Static methods

productSchema.statics.fireSale= function () {
  //this here means the whole Product modes
  return this.updateMany({}, {onSale:true, price:0})
}



//model name should alwasy start with capital nd is singular
//new collection is stored in lower case nd plural 
const Product= mongoose.model('Product',productSchema)
const bike= new Product({name:'Mountain Bike',price:599})
//obj should always be saved
bike.save()
// .then(data=>{
//   console.log("It worked!!")
//   console.log(data);
// })
// .catch(err=> console.log(err)
// )

// Product.findOneAndUpdate({name:'Mountain Bike'},{price:9},{new:true,runValidators:true})
// .then(data=>{
//   console.log("It worked!!")
//   console.log(data);
// })
// .catch(err=> console.log(err)
// )

const findProduct= async ()=>{
  const foundProduct = await Product.findOne({name:'Mountain Bike'})
  foundProduct.greet();
  console.log(foundProduct)
 await foundProduct.toggleOnSale()
  console.log(foundProduct)

}

findProduct()

Product.fireSale().then((r)=>console.log(r))