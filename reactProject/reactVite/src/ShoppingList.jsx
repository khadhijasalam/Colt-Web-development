 import ShoppingListItem from './ShoppingListItem.jsx'

 function ShoppingList({data}){

  return(
  
    <ul>
      {

      data.map((i)=>(

      
          <ShoppingListItem 
          key={i.id}
          item= {i.item}
          quantity={i.quantity}
          completed={i.completed}
          />
      
          // <ShoppingListItem key={i.id} {...i}/>

        
      ))
      }


    </ul>
    

  )
}

export default ShoppingList;

// key={i.id}
//         style={i.completed? {color:"grey",textDecoration: "line-through"}:{color:"red"}}
// {i.item} - {i.quantity}