import React from "react";
import { useState, useEffect } from 'react';
import PhotoEntry from '../components/PhotoEntry'



function EnterMyBirdData() {

  const[bird_species,setName]=useState('')
  const[location,setLocation]=useState('')
  const[date,setDate]=useState('')
  const[description, setDescription]=useState('')
  const [file, setFile] = useState();
          function handleChange(e) {
              console.log(e.target.files);
              setFile(URL.createObjectURL(e.target.files[0]));
          }




  const handleSubmit = (event) => {
      event.preventDefault();
  };

  const handleClick=(event)=>{
    event.preventDefault()
    const newBirdEntry = {bird_species,location,date,description,file}
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
       <label htmlFor="description">Field Notes:</label>
       <textarea id="description" name="description" value={description} onChange={(event)=>setDescription(event.target.value)}></textarea>
       <br />
       <br />
            <div className="App">
                <h2>Add Image:</h2>
                <input type="file" onChange={handleChange} />
                <img src={file} />
            </div>
       <br />
       <br />
      <button type="submit" onClick={handleClick}>Submit Findings</button>
    </form>
  )
}

export default EnterMyBirdData;