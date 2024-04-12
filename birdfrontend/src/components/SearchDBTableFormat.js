import React from "react";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from '../searchdatabase.css'



function SearchDBTableFormat() {

  const[birds, setBirds]=useState([])
  const [search, setSearch] = useState('')
    console.log(search)

    useEffect(() =>{
        fetch("http://localhost:8080/mybirds/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setBirds(result);
        }
    )
    },[])

  return (
   <div>
    <Container>
     <h2>Search Community Database For Birds</h2>
      <form>
        <InputGroup>
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search...'/>
        </InputGroup>
     </form>
    <div>
        <br/>
        <Table>
        <thead>
          <tr>
            <th>Bird Species</th>
            <th>Location Seen</th>
            <th>Date Seen</th>
            <th>Field Notes</th>
          </tr>
        </thead>
        <tbody>
         {birds.filter(bird =>
             search.trim() === '' ||
             bird.bird_species.toLowerCase().includes(search.toLowerCase().trim()) ||
             bird.location.toLowerCase().includes(search.toLowerCase().trim()) ||
             bird.date.toLowerCase().includes(search.toLowerCase().trim()) ||
             bird.description.toLowerCase().includes(search.toLowerCase().trim())
           ).map(bird => (
            <tr key={bird.id}>
              <td>{bird.bird_species}</td>
              <td>{bird.location}</td>
              <td>{bird.date}</td>
              <td>{bird.description}</td>
            </tr>
          ))}
        </tbody>
        </Table>
        </div>
       </Container>
      </div>
  )
}

export default SearchDBTableFormat;
