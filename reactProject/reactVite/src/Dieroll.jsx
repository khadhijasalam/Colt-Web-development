export default function Dieroll(){
  const num1=Math.floor(Math.random()*6)+1
  const num2=Math.floor(Math.random()*6)+1
  const isWinner= num1==num2;
  const disp= isWinner?<h1 style={{color:"green"}}>You Won</h1>:
  <h1 style={{color:"red"}}> You Lose :(</h1>
 return (
      <>
        {disp}
      <p>{num1}</p>
      <p>{num2}</p>
      </>
    )

  

  
  
}