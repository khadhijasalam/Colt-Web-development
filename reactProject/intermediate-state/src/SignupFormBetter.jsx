import {useState} from "react";

export default function SignupFormBetter(){

  const [formData,setFormData]=useState({
    firstName:"",lastName:""
  })

  function updateForm(evt){

const changedField = evt.target.name; //firstName
const newValue=evt.target.value; //user input

    setFormData((currData)=>{
      
      return {...currData,
        [changedField]: newValue
      };

    })
  }
  // function updateFirstName(evt){
  //   setFirstName(evt.target.value)
  // }
  // function updateLastName(evt){
  //   setLastName(evt.target.value)
  // }
return(
  <div>
    <form>
   <label htmlFor="firstName">Enter First name: </label>
      <input type="text" placeholder="First Name"  value={formData.firstName}
      name="firstName" onChange={updateForm} id='firstName'/>
      <div>

   <label htmlFor="lastName">Enter Last name: </label>
      <input type="text" placeholder="Last Name"  value={formData.lastName} onChange={updateForm} id='lastName'
      name="lastName" //must givr the name of property inside useState
      />
      <label htmlFor="password">Enter Password: </label>
      <input type="password" placeholder="password"  value={formData.password}
      name="password" onChange={updateForm} id='password'/>
      <div></div>
      </div>
      <button>Submit</button>
    </form>

  </div>
)
}