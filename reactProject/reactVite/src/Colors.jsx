export default function Colors({colors}){
  console.log(colors)
  const styles=colors[0]
  console.log(styles)

  return (<div>  
    {/* takes each element from the list and gives it as <p></p> and also applies the color that specifies element */}
    <p>{colors.map((c)=> <p style={{color:c}}>{c}</p>)}</p>

  </div>)
}