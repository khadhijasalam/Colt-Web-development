import {useState} from "react"





export default function Score({numPlayer,target}){
const [score,setScore] = useState(Array(numPlayer).fill(0))
// const [winner,setWinner]=useState(null)
// console.log(score)
// console.log(setScore)

function changeScore(idx){

setScore(score.map((score,i)=>{
  if(i==idx){
    // if(score+1 >=3){
    //   setWinner(idx)

    // }
    return score+1;
  }
  else{
    return score
  }
}))
}

// const isWinner =function(){
//   console.log( <p>Winner</p>)
  
//   return <p>Winner</p>
// }

function resetScore(){
  setScore(score.map(()=>{ return 0}) )
}

return(
  <div>
    {console.log(target)}
   { score.map((score,idx)=>(<li key={idx}>Player{idx+1} : {score} <button onClick={()=>changeScore(idx)}>+1</button>{score>= target && "winner!"} </li>)) }
   <button onClick={resetScore}>Reset</button>


  </div>
)


}