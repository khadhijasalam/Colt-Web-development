
import './App.css'
// import Hello from './Hello.jsx'
// import ListPicker from './ListPicker.jsx'
// import Heading from './Heading.jsx'
// import Dieroll from './Dieroll.jsx'
// import Colors from './Colors.jsx'
// import Slot from './Slot'

import ShoppingList from './ShoppingList.jsx'


const data=[
  {
    id:1,
    item:"eggs", quantity:12, completed:false 
  },
  {
    id:2,
    item:"milks", quantity:2, completed:false 
  },
  {
    id:3,
    item:"Bread", quantity:4, completed:true 
  },
  {
    id:4,
    item:"Cabbage", quantity:8, completed:true 
  }
]

function App() {
 
  

  return (
    <>
    <ShoppingList data={data}/>


    {/* <Hello person="Khadhija" n='150'/>
    <hello n={15}/> 
     <ListPicker values={[1,2,3]}/>
    <Heading color='pink' text='hello'/>
    <Dieroll/>


<Colors colors={['pink','lightblue','lemongreen','hi'] }/>
<div>
  <Slot val1="k" val2="k" val3="k"/>
  <Slot val1="k" val2="m" val3="k"/>

</div> */}

    </>
    
  )
}

export default App
