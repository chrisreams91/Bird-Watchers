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
   <div className="bird-data-container">
    <div className="bird-sighting-form">
      <form id="new-bird-sighting" onSubmit={handleSubmit}>
          <h2>Add A New Bird Sighting!</h2>
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
                    <h2>Add Image:</h2>
                    <input type="file" ref={picName} id="image" accept="image/*" onChange={handleChangeImage} />
                    <img src={imageFile} />
                </div>
           <br />
           <br />
                <div className="App">
                    <h2>Add Sound:</h2>
                    <input type="file" ref={soundName} id="sound" accept="sound/*" onChange={handleChangeSound} />
                    <img src={soundFile} />
                </div>
           <br />
           <br />
          <button type="submit">Submit Findings</button>
     </form>
   </div>
   <div className="bird-entries">
       <h2>My Entries</h2>
    <table>
      <thead>
        <tr>
            <th>IDs</th>
            <th>Bird Species</th>
            <th>Location Seen</th>
            <th>Date Seen</th>
            <th>Field Notes</th>
            <th>Photo</th>
            <th>Sound File</th>
            <th>Edit Bird</th>
            <th>Delete Bird</th>
        </tr>
      </thead>
      <tbody>
          {birds.map((bird) => (
            <tr key={bird.id}>
              <td>{bird.id}</td>
              <td>{bird.bird_species}</td>
              <td>{bird.location}</td>
              <td>{bird.date}</td>
              <td>{bird.description}</td>
              <td>
                    <div>
                       <div>
                          <br/>
                          <br/>
                          <img src={imageFile} width={200} height={200}></img>
                       </div>
                    </div>
              </td>
              <td> <audio controls> <source src="your_audio_file.mp3" type="audio/mpeg"/> </audio> </td>

               <title>Update Bird</title>

              <body>


                    <div className="bird-sighting-update-form">
                      <form id="update-bird-sighting" onSubmit={handleSubmit}>
                      <label for="species">Species:</label>
                      <input type="text" id="species" name="species" required/><br/><br/>

                      <label for="date">Date:</label>
                      <input type="date" id="date" name="date" required/><br/><br/>

                      <label for="location">Location:</label>
                      <input type="text" id="location" name="location" required/><br/><br/>

                      <label for="description">Description:</label><br/>
                      <textarea id="description" name="description" rows="4" cols="50" required/><textarea/><br/><br/>




                      <input type="hidden" id="birdId" name="birdId"/><br/><br/>
                      <button type="submit">Submit Findings</button>
                      </form>
                      <button type="button" onclick="updateBird()">Update</button>





                  <script>
                      // Function to update bird details
                      function updateBird() {
                          // Fetch form data
                          {birds.map((bird) => (
                                     <tr key={bird.id}>
                                       <td>{bird.id}</td>
                                       <td>{bird.bird_species}</td>
                                       <td>{bird.location}</td>
                                       <td>{bird.date}</td>
                                       <td>{bird.description}</td>
                                        </tr>
                          // Create FormData object to send data as multipart/form-data
                          const formData = new FormData();
                          formData.append('bird_species', species);
                          formData.append('date', date);
                          formData.append('location', location);
                          formData.append('description', description);
                          formData.append('photo', photo);
                          formData.append('sound', sound);

                          // Send update request to backend
                          fetch(`/updateBird/${birdId}`, {
                              method: 'POST',
                              body: formData
                          })
                          .then(response => response.json())
                          .then(data => {
                              // Handle response
                              console.log(data);
                              // Optionally, you can redirect or show a success message here
                          })
                          .catch(error => {
                              console.error('Error:', error);
                              // Handle errors
                          });
                      }
                  </script>
              </body>

              <button> Edit </button>
              <td> Delete button goes here</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default EnterMyBirdData;