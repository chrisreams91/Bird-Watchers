import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link, useNavigate, BrowserRouter } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";
function Update() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        id: id,
        title: '',
        blog: ''
    })

      const [isLoading, setIsLoading] = useState(false); // Track loading state
      const [error, setError] = useState(null); // Store error message

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(`http://localhost:8080/blogposts/${id}`); // Corrected URL
        setValues({ ...values, title: response.data.title, blog: response.data.blog });
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('An error occurred while fetching the blog post. Please try again later.');
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
      await axios.put(`http://localhost:8080/blogposts/${id}`, values);
      navigate('/blog'); // Navigate to blog list on success
    } catch (err) {
      console.error('Error updating blog post:', err);
      setError('An error occurred while updating the blog post. Please try again later.');
    }
  };



    return (
           <div>
           <div className="loginText">
           <form onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="title" className="loginEntry">Title</label>
                  <input type="text" className="loginEntry" id="title" name="Title" value={values.title} onChange={e => setValues({...values, title: e.target.value})} required/>

                  <br />
                  <br />

                   <label htmlFor="blogText"  className="loginEntry">Blog</label>
                   <textarea id="blogText"  className="loginEntry" name="BlogText" value={values.blog} onChange={e => setValues({...values, blog: e.target.value})} required></textarea>

                   <br />
                   <br />
                  <button className="loginButton">Update Blog</button>
            </form>
            </div>
           </div>
    )
}

export default Update;