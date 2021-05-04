import { useState } from 'react';
import './App.css';
import trip from "./assets/trip.svg"

function App() {
  const earphones = ["skullcandy","jbl","boat"]
  const laptops = ["lenovo","dell","hp"]
  const mobiles = ["iphone","oneplus","samsung"]

 
  const friends = ["Goa","Spiti valley","Kasol"]
  const famjam = ["Bhutan","Andaman Island","Rajasthan"]
  const road = ["Delhi to Leh","Vizag to Araku Valley", "Chennai to Pondicherry"]
  const cruise = ["The Carribean", "Alaska","Hawaii","The Mediterranean"]


  const [suggestions,setSuggestions] = useState([]);
  const [selected,setSelected] = useState("");
  const [btnClass,setBtnClass] = useState("default-btn");


  function btnClickHandler(type){
    if(type === "friends")
      setSuggestions(friends);
    else if (type === "famjam")
      setSuggestions(famjam)
    else if(type === "road")
      setSuggestions(road);
    else if(type === "cruise")
      setSuggestions(cruise);
    if(type !== "")
      setSelected(type);
      
  }

  return (
    <div >
        <img src = {trip} alt="logo" style={{height : "175px"}}></img>
        <h4 style = {{margin : "10px 0px",color:"white"}}>Check out some suggestions here for your trips. Select a category.</h4>
        
        <div>
          <button className = {selected === "friends" ? "selected-btn" : btnClass}
          onClick = {() => btnClickHandler("friends")}
          >Friends</button>
          <button className = {selected === "famjam" ? "selected-btn" : btnClass}
          onClick = {() => btnClickHandler("famjam")}
          >Famjam</button>
          <button className = {selected === "road" ? "selected-btn" : btnClass}
          onClick = {() => btnClickHandler("road")}
          >Road Trips</button>
          <button className = {selected === "cruise" ? "selected-btn" : btnClass}
          onClick = {() => btnClickHandler("cruise")}
          >Cruise</button>
        </div>
        <hr style={{color:'black'}}></hr>
        <div className = "suggested-list">
          {suggestions.map(item=>{
            return <div key={item} className = "suggested-item">{item}</div>
          })}
        </div>      
    </div>
  );
}

export default App;
