export default function Slot({val1,val2,val3}){
  
  const isSame= val1==val2 && val2==val3
  console.log(val1,val2,val3)
  console.log(isSame)
  const result=isSame?   <h2 style={{color:"green"}}>You Win!</h2>:<h2 style={{color:"red"}}>you Lose!</h2>
   
  const congrats= isSame? <h3>Congrats!!!</h3>: null;

// console.log(iss)


  return(<>
  <h1>{val1} {val2} {val3}</h1>
{result}
  {congrats}
  
    </>

  )

 
}