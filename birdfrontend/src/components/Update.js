import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import styles from "../mybirds.css";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

function Update() {

    const[date,setDate]=useState(getCurrentDate());
    const[title,setTitle]=useState('');
    const[blogText, setBlogText]=useState('');
    const[blogs, setBlogs]=useState([]);
    const titleName = useRef("");
    const textName = useRef("");
    const dateName = useRef("");

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


        const [blogData, setBlogData] = useState({
            title: '',
            blogText: '',
            date: ''
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
           <div className="entry">
                        <h2>Update Blog</h2>
                        </div>
           <div className="loginText">
           <form id="update-blog-post" onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="title" className="loginEntry">Title</label>
                  <input type="text" className="loginEntry" ref={titleName} id="title" name="title" value={blogData.title} onChange={handleInputChange} required/>

                  <br />
                  <br />

                   <label htmlFor="blogText"  className="loginEntry">Blog</label>
                   <textarea id="blogText"  className="loginEntry" ref={textName} name="blogText" value={blogData.blogText} onChange={handleInputChange} required></textarea>

                   <br />
                   <br />

                    <label htmlFor="date">Date:</label>
                              <input type="date" ref={dateName} id="date" name="date" value={blogData.date}
                                                                                               onChange={handleInputChange} required/>
                              <br />
                              <br />
                  <button className="loginButton">Update Blog</button>
            </form>
            </div>
           </div>
    )
}

export default Update;