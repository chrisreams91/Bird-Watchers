{/*import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link, useNavigate, BrowserRouter } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";

function UpdateBirds() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id: id,
        name: '',
        location: '',
        description: ''
    })

      const [isLoading, setIsLoading] = useState(false); // Track loading state
      const [error, setError] = useState(null); // Store error message

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(`http://localhost:8080/mybirds/${id}`);
        setValues({ ...values, name: response.data.bird_species, location: response.data.location, description: response.data.description });
      } catch (err) {
        console.error('Error fetching bird data:', err);
        setError('An error occurred while fetching the bird data. Please try again later.');
      } finally {
        setIsLoading(false); // Set loading state to false after fetching or error
      }
    };

    fetchData();
  }, [id]); // Re-fetch data if `id` changes

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8080/mybirds/${id}`, values);
      navigate('/mybirds'); // Navigate to bird list on success
    } catch (err) {
      console.error('Error updating bird data:', err);
      setError('An error occurred while updating the bird data. Please try again later.');
    }
  };



    return (
           <div>
           <div className="loginText">
           <form onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="name" className="loginEntry">Bird Species</label>
                  <input type="text" className="loginEntry" id="bird_species" name="bird_species" value={values.bird_species} onChange={e => setValues({...values, bird_species: e.target.value})} required/>

                  <br />
                  <br />

                   <label htmlFor="location"  className="loginEntry">Location</label>
                   <input type="text" className="loginEntry" id="location" name="location" value={values.location} onChange={e => setValues({...values, location: e.target.value})} required/>

                   <br />
                   <br />

                   <label htmlFor="description"  className="loginEntry">Description</label>
                   <input type="text" className="loginEntry" id="description" name="description" value={values.description} onChange={e => setValues({...values, description: e.target.value})} required/>

                   <br />
                   <br />

                  <button className="loginButton">Update Bird Entry</button>
            </form>
            </div>
           </div>
    )
}

export default UpdateBirds;*/}