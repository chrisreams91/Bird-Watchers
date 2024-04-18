import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link, useNavigate, BrowserRouter } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";
function Update() {

      const[title,setTitle]=useState('');
      const[blogText, setBlogText]=useState('');
      const[blogs, setBlogs]=useState([]);
      const titleName = useRef("");
      const dateName = useRef("");
      const textName = useRef("");
      const [errors, setErrors] = useState({});
      const commentName = useRef("");
      const[comment, setComment]=useState('');
    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        blog: ''
    })
    useEffect(() => {
        axios.get('http://localhost:3000/blog'+id)
        .then(res => {
            setValues({...values, title: res.data.title, blog: res.data.blog})})
        .catch(err => console.log(err))
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/blog'+id, values)
        .then(res => {
            navigate('/blog')
        })
        .catch(err => console.log(err))
    }
    return (
           <div>
           <div className="loginText">
           <form onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="Title" className="loginEntry">Title</label>
                  <input type="text" className="loginEntry" ref={titleName} id="title" name="Title" value={values.title} onChange={e => setValues({...values, title: e.target.value})} required/>

                  <br />
                  <br />

                   <label htmlFor="BlogText"  className="loginEntry">Blog</label>
                   <textarea id="blogText"  className="loginEntry" ref={textName} name="BlogText" value={values.blog} onChange={e => setValues({...values, blog: e.target.value})} required></textarea>

                   <br />
                   <br />
                  <button className="loginButton">Update Blog</button>
            </form>
            </div>
           </div>
    )
}

export default Update;