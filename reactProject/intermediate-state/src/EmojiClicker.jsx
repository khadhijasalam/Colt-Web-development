
import {useState} from "react"
import {v4 as uuid} from "uuid"

export default function EmojiClicker(){
 function randEmoji(){
  const randEm=['😀','😍','😘','🤩','🫡','😋','😎']
  return randEm[Math.floor(Math.random()*randEm.length
  )]
 }
  const [emoji,setEmoji]= useState([{id:uuid(),emoji:randEmoji()}])
  function addEmoji(){
    setEmoji((e)=>[...e,{id:uuid(),emoji:randEmoji()}])
  }
  function deleteEmoji(id){
    // console.log(id)
    
  //    const res=emoji.filter((e)=>e.id!=id)
  // setEmoji(res)
  setEmoji((previousEmoji)=>previousEmoji.filter((e)=>e.id!=id))}
  function love(){
    setEmoji((prevEmo)=>prevEmo.map((l)=>{return {...l,emoji:'💗'}}))
  }
  return(
  <div>
    <p>{emoji.map((e)=>(
      <span key={e.id} style={{fontSize:"4rem"}} onClick={()=>deleteEmoji(e.id)}>{e.emoji}</span>
    ))}</p>
    <button onClick={addEmoji}> Add Emoji</button>
    <button onClick={love}>Replace with love</button>
  </div>
  )

}