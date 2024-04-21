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
          const deleteImage = (url) => {
              if (window.confirm("Are you sure you want to delete this sound? This action cannot be undone!")) {
                const imageRef = ref(storage, url);
                deleteObject(imageRef)
                  .then(() => {
                    console.log("Sound deleted successfully!");
                    setImageUrls((prev) => prev.filter((prevUrl) => prevUrl !== url));
                  })
                  .catch((error) => {
                    console.error("Error deleting sound:", error);
                  });
              }
            };

          const [imageUpload, setImageUpload] = useState(null);
            const [imageUrls, setImageUrls] = useState([]);

            const imagesListRef = ref(storage, "images/");
            const uploadFile = () => {
              if (imageUpload == null) return;
              const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
              uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                  setImageUrls((prev) => [...prev, url]);
                });
              });
            };

      const [fetchedUrls, setFetchedUrls] = useState(false);

          useEffect(() => {
            if (!fetchedUrls) {
              listAll(imagesListRef).then((response) => {
                const urls = response.items.map((item) => getDownloadURL(item));
                Promise.all(urls).then((imageUrls) => {
                  setImageUrls(imageUrls);
                  setFetchedUrls(true);
                });
              });
            }
          }, [fetchedUrls]);

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

  {/*const picName = useRef("");
  const soundName = useRef("");*/}
  const { username } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



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

  {/*const [soundFile, setSoundFile] = useState({});
  const handleChangeSound = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSoundFile(file);
  }

    const [imageFile, setImageFile] = useState({});
    const handleChangeImage = (e) => {
      const file = e.target.files[0];
      console.log(file);
      setImageFile(file);
    }*/}


const handleSubmit = async (event) => {
    event.preventDefault();
    birdName.current.value = "";
    locName.current.value = "";
    dateName.current.value = "";
    descName.current.value = "";
    picName.current.value = "";
    soundName.current.value = "";
    const newBirdEntry = { bird_species, location, date, description, soundFile };
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
      setImageUpload(null);
      setSoundFile(null);
    } catch (error) {
      console.error("Error adding new bird sighting:", error);
    }
  }


   useEffect(() => {
     const fetchBirds = async () => {
       try {
         const token = localStorage.getItem('jwtToken');
         console.log(token)
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

useEffect(() => {
    const fetchBirds = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get("http://localhost:8080/mybirds/getAll", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
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
  try {
    setLoading(true);
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    if (!token) {
      throw new Error('No JWT token found');
    }
    const response = await axios.get(`http://localhost:8080/mybirds/add/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setBirds(response.data);
  } catch (error) {
    console.error(error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};



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

          <button type="submit">Submit Findings</button>
     </form>
     </div>
     </div>
   </div>
   <div className="myEntry">
       <h2>My Entries</h2>
    <table>
      <tbody>
          {birds.map((bird) => (
          <div>
          <div className="entryText">
          <div className="container">
            {imageUrls.map((url) => {
            return (
            <div className="img">
               <img src={url} width={250} height={250}></img>
               <audio controls> <source src="your_audio_file.mp3" type="audio/mpeg"/> </audio>
              </div>
               )
               })}

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

                        <a href={`/mybirds/add/${bird.id}`} className="entryButtons">


                        <button type="button" className="entryButtons">
                        <Link to={`/updatebirds/${bird.id}`}>

                        <div className="buttonLevel">
                        <img src="https://static.thenounproject.com/png/2473159-200.png" width={50} height={50}></img>
                        </div>


                        </a>
                        </Link>
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