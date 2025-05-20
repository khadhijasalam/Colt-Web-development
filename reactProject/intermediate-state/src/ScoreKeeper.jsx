import {useState} from "react"

export default function ScoreKeeper({numPlayers,target}){
  
  const [score,setScore]= useState(Array({numPlayers}).fill(0))

  function scoreInc(){
    return setScore((prevScore)=> prevScore+1)
  }
  function createPlayer(num){
  return playerArr= Array(num).fill(0)
     const n=playerArr.map((ele,idx)=>{
      console.log(`player ${idx+1}`);

 return (<li> Player{idx+1} : {ele} <button  onClick={scoreInc}>+1</button></li>)

    })
    console.log(playerArr)
    // console.log(n)
  }

  return(
  <div>
     playerArr= Array(num).fill(0)
    <ul>
    {/* <li> {createPlayer(numPlayers)}</li> */}
    <li> playerArr.map((ele,idx)=>
      ( <li> Player{idx+1} : {ele} <button  onClick={scoreInc}>+1</button>
      </li>
      ))</li>
  
    </ul>
   

    {/* <li> Player1 : {score} <button  onClick={scoreInc}>+1</button></li>
    */}
 

  </div>)
}
