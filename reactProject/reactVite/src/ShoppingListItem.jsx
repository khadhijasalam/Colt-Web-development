function ShoppingListItem ({item,quantity,completed}){
console.log(item)
console.log(quantity)
const styles= completed? {color:"grey",textDecoration: "line-through"}:{color:"red"}
// {i.item} - {i.quantity}
  return(
    <li style={styles} >{item}-{quantity}</li>
  )




}

export default ShoppingListItem;