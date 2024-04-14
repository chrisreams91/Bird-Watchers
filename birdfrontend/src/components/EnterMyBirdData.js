import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from '../mybirds.css'


function EnterMyBirdData() {

  const[bird_species,setName]=useState('')
  const[location,setLocation]=useState('')
  const[date,setDate]=useState(getCurrentDate())
  const[description, setDescription]=useState('')
  const[birds, setBirds]=useState([])
  const { id } = useParams();
  const birdName = useRef("");
  const locName = useRef("");
  const dateName = useRef("");
  const descName = useRef("");
  const picName = useRef("");
  const soundName = useRef("");

  function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

  const [imageFile, setImageFile] = useState({});
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImageFile(file);
  }

  const [soundFile, setSoundFile] = useState({});
  const handleChangeSound = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSoundFile(file);
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    birdName.current.value = "";
    locName.current.value = "";
    dateName.current.value = "";
    descName.current.value = "";
    picName.current.value = "";
    soundName.current.value = "";
    const newBirdEntry = {bird_species,location,date,description,imageFile,soundFile}
    console.log(newBirdEntry)
    fetch("http://localhost:8080/mybirds/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newBirdEntry)
    }).then(()=>{
        console.log("New bird sighting has been added!")
        setName('');
        setLocation('');
        setDate('');
        setDescription('');
        setImageFile(null);
        setSoundFile(null);
    })
     .catch((error) => {
        console.error("Error adding new bird sighting:", error);
     });
  }

  useEffect(() => {
      const fetchBirds = async () => {
        try {
          const response = await axios.get("http://localhost:8080/mybirds/getAll");
          setBirds(response.data);
        } catch (error) {
          console.error('Error fetching bird sightings:', error);
        }
      };

      fetchBirds();
      const intervalId = setInterval(fetchBirds, 2000);

      return () => clearInterval(intervalId);
    }, []);



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
    <div className="container">
      <form id="new-bird-sighting" onSubmit={handleSubmit}>
      <div className="entry">
          <h2>BirdEntry</h2>
          </div>
          <br />
          <label htmlFor="bird_species">Bird Name:</label>
          <input type="text" ref={birdName} id="bird_species" name="bird_species" value={bird_species} onChange={(event)=>setName(event.target.value)} required/>
          <br />
          <br />
          <label htmlFor="location">Location:</label>
          <input type="text" ref={locName} id="location" name="location" value={location} onChange={(event)=>setLocation(event.target.value)} required/>
          <br />
          <br />
          <label htmlFor="date">Date Seen:</label>
          <input type="date" ref={dateName} id="date" name="date" value={date} onChange={(event)=>setDate(event.target.value)} required/>
          <br />
          <br />
           <label htmlFor="description">Field Notes:</label>
           <textarea id="description" ref={descName} name="description" value={description} onChange={(event)=>setDescription(event.target.value)} required></textarea>
           <br />
           <br />
                <div className="App">
                    <h2>Add Image</h2>
                    <input type="file" ref={picName} id="image" accept="image/*" onChange={handleChangeImage} />
                    <img src={imageFile} />
                </div>
           <br />
           <br />
                <div className="App">
                    <h2>Add Audio</h2>
                    <input type="file" ref={soundName} id="sound" accept="sound/*" onChange={handleChangeSound} />
                    <img src={soundFile} />
                </div>
           <br />
           <br />
          <button type="submit">Submit Findings</button>
     </form>
   </div>
   <div className="myEntry">
       <h2>My Entries</h2>
    <table>
      <tbody>
          {birds.map((bird) => (
          <div className="entryText">
          <div className="container">
            <div className="img">
               <img src={imageFile} width={250} height={250}></img>
               <audio controls> <source src="your_audio_file.mp3" type="audio/mpeg"/> </audio>
            </div>
            <p>
                <h2 className="title">{bird.bird_species}</h2>
                    <div className="list">
                    <div className="column">
                         <li>ID: {bird.id}</li>
                         <li>Location: {bird.location}</li>
                         <li>Date Seen: {bird.date}</li>
                         <li>Description: {bird.description}</li>
                    </div>
                    </div>
                    <div>
                    <div>
                    <td>
                        <button type="button" className="entryButtons">
                        <div className="buttonLevel">
                            <img src="https://static.thenounproject.com/png/2473159-200.png" width={50} height={50}></img>
                        </div>
                        </button>
                        <div>
                        <td>
                        <div>
                        <td>
                        </td>
                        </div>
                        </td>
                        </div>
                        <button type="button" className="entryButtons">
                        <div className="buttonLevel">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1476282-1248958.png?f=webp" width={50} height={50}></img>
                        </div>
                        </button>
                    </td>
                    </div>
                    </div>
            </p>
            </div>
            </div>
          ))}
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default EnterMyBirdData;