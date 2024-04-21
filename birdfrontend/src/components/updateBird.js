import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import styles from "../mybirds.css";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';



function UpdateBird() {


      const[bird_species,setName]=useState('')
      const[location,setLocation]=useState('')
      const[date,setDate]=useState(getCurrentDate())
      const[description, setDescription]=useState('')
      const[birds, setBirds]=useState([])
      const birdName = useRef("");
      const locName = useRef("");
      const dateName = useRef("");
      const descName = useRef("");



        function getCurrentDate() {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          }


     const [username, setUsername] = useState('');
       useEffect(() => {
         const token = localStorage.getItem('jwtToken');
         if (token) {
           const decodedToken = jwtDecode(token);
           setUsername(decodedToken.sub);
         }
       }, []);


     const [birdData, setBirdData] = useState({
         bird_species: '',
         location: '',
         date: '',
         description: ''
       });

        const {id} = useParams();

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setBirdData({
              ...birdData,
              [name]: value
            });
          };


      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('jwtToken');
          if (!token) {
            throw new Error('No JWT token found');
          }
          const response = await axios.put(
            `http://localhost:8080/mybirds/add/${id}`,
            {
              ...birdData,
              username: username
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
          console.log(response);
        } catch (err) {
          console.error(err);
        }
      };



    return(
<div>
         <div className="entry">
             <h2>Update Bird</h2>
             </div>
    <div className="container">
    <div className="birdText">
              <div className="innerText">
      <form id="new-bird-sighting" onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
          <label htmlFor="bird_species">Bird Name:</label>
          <input className="textBox" type="text" ref={birdName} id="bird_species" name="bird_species"value={birdData.bird_species}
                                                                                                               onChange={handleInputChange} required/>
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="location">Location:</label>
          <input type="text" ref={locName} id="location" name="location" value={birdData.location}
                                                                                   onChange={handleInputChange} required/>
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="date">Date Seen:</label>
          <input type="date" ref={dateName} id="date" name="date" value={birdData.date}
                                                                           onChange={handleInputChange} required/>
          <br />
          <br />
          <br />
          <br />
           <label htmlFor="description">Field Notes:</label>
           <textarea id="description" ref={descName} name="description" value={birdData.description}
                                                                                  onChange={handleInputChange} required></textarea>
           <br />
           <br />
           <br />
           <br />
                <div className="App">
                </div>
           <br />
           <br />
          <button type="submit">Submit Findings</button>
     </form>
     </div>
     </div>
     </div>
     </div>
    )



}

export default UpdateBird;