import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import styles from "../mybirds.css";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

function Update() {

    const[title,setTitle]=useState('');
      const[blogText, setBlogText]=useState('');
      const[blogs, setBlogs]=useState([]);
      const titleName = useRef("");
      const textName = useRef("");


        const [username, setUsername] = useState('');
          useEffect(() => {
            const token = localStorage.getItem('jwtToken');
            if (token) {
              const decodedToken = jwtDecode(token);
              setUsername(decodedToken.sub);
            }
          }, []);


        const [blogData, setBlogData] = useState({
            title: '',
            blogText: ''
          });

           const {id} = useParams();

           const handleInputChange = (e) => {
               const { name, value } = e.target;
               setBlogData({
                 ...blogData,
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
               `http://localhost:8080/blogposts/add/${id}`,
               {
                 ...blogData,
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


    return (
           <div>
           <div className="loginText">
           <form onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="title" className="loginEntry">Title</label>
                  <input type="text" className="loginEntry" ref={titleName} id="title" name="title" value={blogData.title} onChange={handleInputChange} required/>

                  <br />
                  <br />

                   <label htmlFor="blogText"  className="loginEntry">Blog</label>
                   <textarea id="blogText"  className="loginEntry" ref={textName} name="blogText" value={blogData.blogText} onChange={handleInputChange} required></textarea>

                   <br />
                   <br />
                  <button className="loginButton">Update Blog</button>
            </form>
            </div>
           </div>
    )
}

export default Update;