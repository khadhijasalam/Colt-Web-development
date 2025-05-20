import {useState} from 'react';
import './Toggle.css'

export default function Toggle(){
  let [count, setCount] = useState(0);
  console.log(count)
  const styles= count>10? {color:'green'}: {color:'red'}
  let incrementCount=()=>{
    setCount(count+1)
   
  }


  return (
    <div>
     <h1 className='count' style={ styles}> {count}</h1>
     <button onClick={incrementCount}>+</button>
    </div>
  )
}