import React from "react";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function BlogData() {

  const[title,setTitle]=useState('');
  const[date,setDate]=useState(getCurrentDate());
  const[blogText, setBlogText]=useState('');
  const[blogs, setBlogs]=useState([]);
  const titleName = useRef("");
  const dateName = useRef("");
  const textName = useRef("");
  const [errors, setErrors] = useState({});
  const commentName = useRef("");
  const[comment, setComment]=useState('');
  const[data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get('http://localhost:3000/blog')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])



  function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

  const handleSubmit = (event) => {
    event.preventDefault()
        const currentDate = getCurrentDate();
        const newBlogEntry = {title, date: currentDate, blogText}
        console.log(newBlogEntry)
        fetch("http://localhost:8080/blogposts/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newBlogEntry)
        }).then(()=>{
            console.log("New blog has been added!");
            setTitle('');
            setBlogText('');
        })

  }
        /*const loadBlogs = async () => {
          const result = await axios.get(`http://localhost:8080/blogposts/add/${id}`);
          setBlogs(result.data);
        };*/

    const deleteBlogs = async (id) => {
     await axios.delete(`http://localhost:8080/blogposts/delete/${id}`);
    };



   useEffect(() => {
     const fetchBlogs = async () => {
       try {
         const response = await fetch('http://localhost:8080/blogposts/getAll');
         const data = await response.json();
         setBlogs(data);
       } catch (error) {
         console.error('Error fetching blogs:', error);
       }
     };
     fetchBlogs();
     const intervalId = setInterval(fetchBlogs, 2000);
     return () => clearInterval(intervalId);
   }, []);





  return (
   <div>
    <div className="loginText">
      <form onSubmit={handleSubmit}>
        <br />
          <label htmlFor="Title" className="loginEntry">Title</label>
          <input type="text" className="loginEntry" ref={titleName} id="title" name="Title" value={title} onChange={(event)=>setTitle(event.target.value)} required/>

          <br />
          <br />

           <label htmlFor="BlogText"  className="loginEntry">Blog</label>
           <textarea id="blogText"  className="loginEntry" ref={textName} name="BlogText" value={blogText} onChange={(event)=>setBlogText(event.target.value)} required></textarea>

           <br />
           <br />
          <button type="submit" className="loginButton">Submit Blog</button>
     </form>
   </div>

         <div className="myEntry">
             <h2>Blogs</h2>
          <table>
            <tbody>
                {blogs.map((blog) => (
                <div key={blog.id}>
                <div className="blogText">
                <div className="container">

                  <div className="img">
                     <img width={250} height={250}></img>
                    </div>

                  <p>
                      <h2 className="title">{blog.title}</h2>
                          <div className="list">
                          <div className="column">
                               <p>{blog.blogText}</p>
                               <p>{blog.comment}</p>


                                       <br />
                                         <label htmlFor="Comment" className="loginEntry">Comment</label>
                                         <input type="text" className="loginEntry" ref={commentName} id="comment" name="Comment" value={comment} onChange={(event)=>setComment(event.target.value)} required/>
                                            <button type="submit" className="loginButton">Submit</button>
                                         <br />


                          </div>
                          </div>
                          <div>
                          <div>
                          <td>

                              <button type="button" className="entryButtons">
                              <Link to={`/update/${blog.id}`}>
                              <div className="buttonLevel">
                                  <img src="https://static.thenounproject.com/png/2473159-200.png" width={50} height={50}></img>
                              </div>
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
                              <button type="button" className="entryButtons" onClick={() => deleteBlogs(blog.id)}>
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

export default BlogData;


