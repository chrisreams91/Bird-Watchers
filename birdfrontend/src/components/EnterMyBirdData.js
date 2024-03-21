import React from "react";
import { useState, useEffect } from 'react';



function EnterMyBirdData() {

  const[bird_species,setName]=useState('')
  const[location,setLocation]=useState('')
  const[date,setDate]=useState('')




  const handleSubmit = (event) => {
      event.preventDefault();
  };

  const handleClick=(event)=>{
    event.preventDefault()
    const newBirdEntry = {bird_species,location,date}
    console.log(newBirdEntry)
    fetch("http://localhost:8080/mybirds/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newBirdEntry)
    }).then(()=>{
        console.log("New bird sighting has been added!")
    })
  }



  return (

    <form onSubmit={handleSubmit}>
    <br />
      <label htmlFor="bird_species">Bird Name:</label>
      <input type="text" id="bird_species" name="bird_species" value={bird_species} onChange={(event)=>setName(event.target.value)} />
      <br />
      <br />
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" value={location} onChange={(event)=>setLocation(event.target.value)} />
      <br />
      <br />
      <label htmlFor="date">Date Seen:</label>
      <input type="date" id="date" name="date" value={date} onChange={(event)=>setDate(event.target.value)} />
      <br />
      <br />
      <button type="submit" onClick={handleClick}>Submit Findings</button>
    </form>
  )
}

export default EnterMyBirdData;