
import styles from '../mybirds.css'
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';


const OtherBirderData = () => {


    const[bird_species,setName]=useState('')
    const[location,setLocation]=useState('')

    const[description, setDescription]=useState('')
    const[birds, setBirds]=useState([])
    const { id } = useParams();
    const birdName = useRef("");
    const locName = useRef("");
    const dateName = useRef("");
    const descName = useRef("");
    const picName = useRef("");
    const soundName = useRef("");
    const { username } = useParams();
    const[imageUrls,setImageURLs]=useState('');




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




    return (
     <div>

     <div className="myEntry">
         <h2>User Entries</h2>
      <table>
        <tbody>
        <br/>
        <br/>
        <br/>
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
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
              <p>
                  <h2 className="title">{bird.bird_species}</h2>
                      <div className="list">
                      <div className="column">
                           <li>Location: {bird.location}</li>
                           <li>Date Seen: {bird.date}</li>
                           <li>Description: {bird.description}</li>
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
export default OtherBirderData;