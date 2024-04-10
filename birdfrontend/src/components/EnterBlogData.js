import React from "react";
import { useState, useEffect, useRef } from 'react';


function BlogData() {

  const[title,setTitle]=useState('');
  const[date,setDate]=useState(getCurrentDate());
  const[blogText, setBlogText]=useState('');
  const[blogs, setBlogs]=useState([]);
  const titleName = useRef("");
  const dateName = useRef("");
  const textName = useRef("");
  const [errors, setErrors] = useState({});

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
        titleName.current.value = "";
        dateName.current.value = "";
        textName.current.value = "";
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
    <div>
      <form onSubmit={handleSubmit}>
        <br />
          <label htmlFor="Title">Title:</label>
          <input type="text" ref={titleName} id="title" name="Title" value={title} onChange={(event)=>setTitle(event.target.value)} required/>

          <br />
          <br />

           <label htmlFor="BlogText">Text:</label>
           <textarea id="blogText" ref={textName} name="BlogText" value={blogText} onChange={(event)=>setBlogText(event.target.value)} required></textarea>

           <br />
           <br />
          <button type="submit">Submit Blog</button>
     </form>
   </div>
       <h2>My Blogs</h2>
    <div>
            <th>IDs</th>
            <th>Title</th>
            <th>Date</th>
            <th>Notes</th>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>Id: {blog.id}</td>
              <td>Title: {blog.title}</td>
              <td>Date: {blog.date}</td>
              <td>Notes: {blog.blogText}</td>
            </tr>
          ))}
        </div>
      </div>
  )
}

export default BlogData;


