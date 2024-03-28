import React from "react";
import { useState, useEffect } from 'react';


function BlogData() {

  const[title,setTitle]=useState('')
  const[date,setDate]=useState('')
  const[blogText, setBlogText]=useState('')
  const[blogs, setBlogs]=useState([])


  const handleSubmit = (event) => {
      event.preventDefault();
  };

  const handleClick=(event)=>{
    event.preventDefault()
    const newBlogEntry = {title, date, blogText}
    console.log(newBlogEntry)
    fetch("http://localhost:8080/blogposts/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newBlogEntry)
    }).then(()=>{
        console.log("New blog has been added!")
    })
  }

    useEffect(() =>{
        fetch("http://localhost:8080/blogposts/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setBlogs(result);
        }
    )
    },[])


  return (
   <div>
    <div>
      <form onSubmit={handleSubmit}>
        <br />
          <label htmlFor="Title">Title:</label>
          <input type="text" id="title" name="Title" value={title} onChange={(event)=>setTitle(event.target.value)} />
          <br />
          <br />
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={date} onChange={(event)=>setDate(event.target.value)} />
          <br />
          <br />
           <label htmlFor="BlogText">Text:</label>
           <textarea id="blogText" name="BlogText" value={blogText} onChange={(event)=>setBlogText(event.target.value)}></textarea>
           <br />
           <br />
          <button type="submit" onClick={handleClick}>Submit Blog</button>
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
