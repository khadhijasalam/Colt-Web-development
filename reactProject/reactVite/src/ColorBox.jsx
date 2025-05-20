import './ColorBox.css'
import {useState} from 'react'


export default function ColorBox({colors}){
function colorIdx(){
  return  Math.floor(Math.random()*colors.length)
}

  const [color,setColor]=useState(colors[colorIdx()])

  function changeColor(){


    setColor(colors[colorIdx()])
  }
  
  return(
  <div >
  <div className="colorbox" style={{backgroundColor:color}} onClick={changeColor}> </div>

  {/* <div className="colorbox"> 4</div> */}
</div>
)

}