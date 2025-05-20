import {useState} from "react";

export default function ShoppingList({addItem})
{

  const [formData,setFormData]=useState({
    product:"",
    quantity:""
  })
  function updateForm(evt){
    setFormData(curdata=>{
      return{
        ...curdata,
        [evt.target.name]: evt.target.value
      }
    })

  }
const handleSubmit =(e)=>{
  e.preventDefault()
  console.log('Ohh noo')
  addItem(formData)

  //resets the form input area to show place holder
  setFormData({product:'', quantity:''})
}
  return(
    <div>
    {/* <h2>The proudct is:{formData.product}</h2>
    <h2>The quantity is:{formData.quantity}</h2> */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="product" >Enter the product: </label>
      <input type="text" placeholder="product"
      id="product"
    
      onChange={updateForm}
      value={formData.product}
      name="product"/>
<br/>
      <label htmlFor="product" >Enter the Quantity: </label>
      <input type="number" placeholder="0"
      id="product"
      onChange={updateForm}

      value={formData.quantity}
      name="quantity"/>
      <br/>

      <button>Submit</button>
    </form>
    </div>
  )
}