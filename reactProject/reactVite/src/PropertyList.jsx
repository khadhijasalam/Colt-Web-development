import PropertyListItem from './PropertyListItem'

function PropertyList({properties}){
  console.log(properties)
  const styles= {display:'flex',  margin: '0 -5px'  }
  return (
  <ul style={styles}>
     {/* <ul > */}
   {

 properties.map((properties)=>(
  
  <PropertyListItem 
  key= {properties.id}
  name={properties.name}
  price={properties.price}
  rating={properties.rating}
  />

    ))
  }
  </ul>
  )
}


export default PropertyList;