import { useState } from 'react';
import './App.css';
import trip from "./assets/trip.svg"
import TripCard from './TripCard';

function App() {
 
  const friends = [
    {
      name:"Mount Abu",do : "Hiking, rock climbing", "stay": "Udai Garh Hotel, Hotel Banjara", budget: "INR 10,000", rating: "3.5/5"
    },
    {
      name:"Rishikesh",do : "River rafting,camping, bungee jumping", "stay": "Swiss Cottage and Spa By Salvus,Aloha by Ganges", budget: "INR 10,000", rating: "4/5"
    },
    {
      name:"Roopkund Lake",do : "Trekking, camping, rappelling", "stay": "Patwal Hotel, Nature’s Treat Resort", budget: "INR 4,000", rating: "4.5/5"
    }
  ]
  const famjam = [
    {
      name : "Dharamshala, Himachal Pradesh", food : "Momos, Tibetan food", eatAt : "Illiterati, Woeser Bakery, Tibet Kitchen", rating: "4/5"
    },
    {
      name : "Shillong, Megahlaya", food : "Momos, Tungrymbai, Chowmein", eatAt : "The Lounge, Jiva Grill", rating: "4.5/5"
    },
    {
      name : "Gangtok, Sikkim", food : "Thukpa, Gundruk, Phagshapa", eatAt : "Cafe Live & Loud, The Square", rating: "3/5"
    }
  ]

  const cruise = [
    {
      name : "Andaman Islands Cruise", location: "Andaman", duration: "5 Days/4 Nights", price: "INR 17,000 onwards", rating: "3/5"
    },
    {
      name : "Kochi Cruise", location: "Kochi", duration: "2 hours", price: "INR 1,000 onwards", rating: "4.5/5"
    },
    {
      name : "Kerala Backwater Cruise", location: "Alleppey, Kerala", duration: "3 Days/2 Nights", price: "INR 5,000 onwards", rating: "4/5"
    }
  ]
  const road = [
    {
      name : "Chennai to Pondicherry", dist : "158kms", time: "3-4 hrs",highways : "NH34",bestmonths : "Oct to Mar", rating: "4.5/5"
    },
    {
      name : "Delhi to Leh", dist : "1091kms", time: "25 hrs",highways : "NH1, NH2",bestmonths : "May to Sep", rating: "4/5"
    },
    {
      name : "Vizag to Araku Valley", dist : "116kms", time: "3-4 hrs",highways : "NA",bestmonths : "Dec to feb", rating: "3/5"
    }
  ]

  const [suggestions,setSuggestions] = useState([]);
  const [selected,setSelected] = useState("");


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
      <div style={{textAlign: "center"}}>
        <img src = {trip} alt="logo" style={{height : "175px"}}></img>
        <h4 style = {{margin : "10px 0px",color:"white"}}>Check out some suggestions here for your trips. Select a category.</h4>
        
        <div>
          <button className = {selected === "friends" ? "selected-btn" : "default-btn"}
          onClick = {() => btnClickHandler("friends")}
          >Friends</button>
          <button className = {selected === "famjam" ? "selected-btn" : "default-btn"}
          onClick = {() => btnClickHandler("famjam")}
          >Famjam</button>
          <button className = {selected === "road" ? "selected-btn" : "default-btn"}
          onClick = {() => btnClickHandler("road")}
          >Road Trips</button>
          <button className = {selected === "cruise" ? "selected-btn" : "default-btn"}
          onClick = {() => btnClickHandler("cruise")}
          >Cruise</button>
        </div>
        </div>
        <hr style={{color:'black'}}></hr>
        <div className = "suggested-list">
          {suggestions.map((item,i)=>{
            return <TripCard key={item+i} tripItem = {item} selected = {selected} />
          })}
        </div>      
    </div>
  );
}

export default App;
