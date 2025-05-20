import {useState} from "react";

export default function UsernameForm(){

  const [username,setUsername]=useState("bah bah")
  function dispInput(evt){
    setUsername(evt.target.value)
  }
return(
  <div>
    <form>
   <label htmlFor="username">Enter Username: </label>
      <input type="text" placeholder="username"  value={username} onChange={dispInput} id='username'/>
     
      <button>Submit</button>
    </form>

  </div>
)
}