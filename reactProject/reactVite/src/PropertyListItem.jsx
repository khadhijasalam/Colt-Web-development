function PropertyListItem({name,price,rating}){

  const styles= {border: '1px solid red',margin: '0 5px' }
  return(
  // <div style={styles}>
    <div>
  <h2> {name}</h2>
  <h3>${price}/- per night</h3>
  <h4>{rating}⭐</h4>
  
  
  </div>)

}

export default PropertyListItem;