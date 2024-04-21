import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link, useNavigate, BrowserRouter } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";
function Update() {

    const[blogText, setBlogText]=useState('');
    const[title,setTitle]=useState('');
    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        blogText: ''
    })

    useEffect(()=> {
        const token = localStorage.getItem('jwtToken');
        axios.get(`http://localhost:8080/blogposts/add/${id}`+id, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
        })
        .then(res => {
            setValues({...values, title: res.data.title, blogText: res.data.blogText})
        })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.put(`http://localhost:8080/blogposts/add/${id}`+id, values)
        .then(res => {
            navigate('/');
        })
    }

    return (
           <div>
           <div className="loginText">
           <form onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="title" className="loginEntry">Title</label>
                  <input type="text" className="loginEntry" id="title" name="title" value={values.title} onChange={e => setValues({...values, title: e.target.value})} required/>

                  <br />
                  <br />

                   <label htmlFor="blogText"  className="loginEntry">Blog</label>
                   <textarea id="blogText"  className="loginEntry" name="blogText" value={values.blogText} onChange={e => setValues({...values, blogText: e.target.value})} required></textarea>

                   <br />
                   <br />
                  <button className="loginButton">Update Blog</button>
            </form>
            </div>
           </div>
    )
}

export default Update;