import React from "react";
import { useState, useEffect } from 'react';
import MP3Player from "./MP3Player";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



function EnterMyBirdData() {

  const[bird_species,setName]=useState('')
  const[location,setLocation]=useState('')
  const[date,setDate]=useState('')
  const[description, setDescription]=useState('')
  const[birds, setBirds]=useState([])
  const { id } = useParams();


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

    useEffect(() =>{
        fetch("http://localhost:8080/mybirds/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setBirds(result);
        }
    )
    },[])



    const loadBirds = async () => {
      const result = await axios.get("http://localhost:8080/mybirds/add/{id}");
      setBirds(result.data);
    };

    const deleteBirds = async (id) => {
      await axios.delete("http://localhost:8080/mybirds/add/{id}");
      loadBirds();
    };




  return (
   <div>
    <div>
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
                <div className="App">
                    <h2>Add Sound:</h2>
                </div>
           <br />
           <br />
          <button type="submit" onClick={handleClick}>Submit Findings</button>
     </form>
   </div>
       <h2>My Entries</h2>
    <div>
            <th>IDs</th>
            <th>Bird Species</th>
            <th>Location Seen</th>
            <th>Date Seen</th>
            <th>Field Notes</th>
            <th>Photo</th>
            <th>Sound File</th>
            <th>Edit Bird</th>
            <th>Delete Bird</th>
          {birds.map((bird) => (
            <tr key={bird.id}>
              <td>Id: {bird.id}</td>
              <td>Name: {bird.bird_species}</td>
              <td>Location: {bird.location}</td>
              <td>Date: {bird.date}</td>
              <td>Field Notes: {bird.description}</td>
              <td>Photo: {bird.photo}</td>
              <td> <MP3Player/> </td>
              <td> Edit Button Goes here</td>
              <td> Delete button goes here</td>
            </tr>
          ))}
        </div>
      </div>
  )
}

export default EnterMyBirdData;