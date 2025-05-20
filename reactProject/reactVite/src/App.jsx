import "./App.css";
import ColorBoxes from './ColorBoxes.jsx'
import Toggle from './Toggle.jsx'
// import Clicker from "./Clicker.jsx"

// import PropertyList from "./PropertyList";
// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <div>
      <ColorBoxes colors={ [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51BF",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FF9800",
    "#FF5722",
]}/>
      {/* <ColorBoxes colors={["yellow","red","Pink","Green","Blue",]}/> */}
      {/* <Colorboxes colors={["LightSeaGreen","LightPink","Pink","LightSkyBlue","Blue","AliceBlue"]}/> */}

      {/* <Toggle/>
      <Clicker message="iiiii!!!!" buttonText="Please dont Click Me"/>
      <PropertyList properties={properties} /> */}
    </div>
  );
}

export default App;