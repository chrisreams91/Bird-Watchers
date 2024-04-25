import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from '../mybirds.css'
import {ref,uploadBytes,getDownloadURL,listAll,list,} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { deleteObject } from "firebase/storage";
import { jwtDecode } from 'jwt-decode';




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
  const { username } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [textError, setTextError] = useState("");


    const validateForm = () => {
                if (bird_species.length < 3 || bird_species.length > 40) {
                    setTextError("Species name must be between 3 and 40 characters");
                    return false;
                }
                if (location.length < 3 || location.length > 100) {
                    setTextError("Location must be between 3 and 100 characters");
                    return false;
                }
                if (description.length < 3 || description.length > 200) {
                    setTextError("Field notes must be between 3 and 200 characters");
                    return false;
                }
                setTextError("");
                return true;
            };

  function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    const clearFormFields = () => {
      setName('');
      setLocation('');
      setDate(getCurrentDate());
      setDescription('');
    };


        const getUsernameFromToken = (token) => {
          const decoded = jwtDecode(token);
          return decoded.sub;
        };

   const handleSubmit = async (event) => {
       event.preventDefault();
       if (!validateForm()) return;
       birdName.current.value = "";
       locName.current.value = "";
       dateName.current.value = "";

       const token = localStorage.getItem('jwtToken');
       const decodedToken = getUsernameFromToken(token);
       const username = getUsernameFromToken(token);
       const newBirdEntry = { bird_species, location, date, description, username};
       console.log("New Bird Entry", newBirdEntry);
       try {
         const token = localStorage.getItem('jwtToken');
         await fetch("http://localhost:8080/mybirds/add", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
           },
           body: JSON.stringify(newBirdEntry)
         });
         console.log("New bird sighting has been added!");
         setName('');
         setLocation('');
         setDate('');
         setDescription('');

       } catch (error) {
         console.error("Error adding new bird sighting:", error);
       }
     }







 useEffect(() => {
     const fetchBirds = async () => {
       try {
         const token = localStorage.getItem('jwtToken');
         let response;
          if (username) {
           response = await axios.get(`http://localhost:8080/mybirds/entries/${username}`, {
           headers: {
             Authorization: `Bearer ${token}`
           }
          });
         } else {
         response = await axios.get("http://localhost:8080/mybirds/entries", {
             headers: {
                 Authorization: `Bearer ${token}`
               }
             });
         }
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
          const result = await axios.get(`http://localhost:8080/mybirds/add/${id}`);
          setBirds(result.data);
        };


 const deleteBirds = async (id) => {
     try {
       const token = localStorage.getItem('jwtToken');
       await axios.delete(`http://localhost:8080/mybirds/add/${id}`, {
         headers: {
           Authorization: `Bearer ${token}`
         }
       });
     } catch (error) {
       console.error('Error deleting bird:', error);
     }
   };






  return (
   <div>
         <div className="entry">
             <h2>BirdEntry</h2>
             </div>
    <div className="container">
    <div className="birdText">
              <div className="innerText">
      <form id="new-bird-sighting" onSubmit={handleSubmit}>
          <br />
          <label htmlFor="bird_species">Bird Name:</label>
          <input className="textBox" type="text" ref={birdName} id="bird_species" name="bird_species" value={bird_species} onChange={(event)=>setName(event.target.value)} required/>
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
            {textError && <div className="text-danger">{textError}</div>}
          <button type="submit">Submit Findings</button>
     </form>
     </div>
     </div>
   </div>
   <div className="myEntry">
       <h2>My Entries</h2>
    <table>
      <tbody>
      <br/>
      <br/>

          {birds.map((bird) => (
          <div>
          <div className="entryText">
          <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <h2 className="title">{bird.bird_species}</h2>
                    <div className="list">
                    <div className="column">
                         <li>Location: {bird.location}</li>
                         <li>Date Seen: {bird.date}</li>
                         <li>Description: {bird.description}</li>
                    </div>
                    </div>
                    <div>
                    <div>
                    <td>
                        <button type="button" className="entryButtons">
                            <a href={`/mybirds/add/${bird.id}`} className="entryButtons">
                            <div className="buttonLevel">
                                <img src="https://static.thenounproject.com/png/2473159-200.png" width={50} height={50}></img>
                            </div>
                              </a>
                            </button>

                        <div>
                        <td>
                        <div>
                        <td>
                        </td>
                        </div>
                        </td>
                        </div>
                        <button type="button" className="entryButtons" onClick={() => deleteBirds(bird.id)}>
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
            </div>
          ))}
      </tbody>
    </table>
    </div>
    </div>
  )
}


export default EnterMyBirdData;