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
  const [loading, setLoading] = useState(true);

   useEffect(() => {
       const token = localStorage.getItem('jwtToken');
       fetch("http://localhost:8080/mybirds/getAll", {
         headers: {
           'Authorization': `Bearer ${token}`
         }
       })
         .then(res => res.json())
         .then(result => {
           setBirds(result);
           setLoading(false);
         })
         .catch(error => {
           console.error('Error fetching data:', error);
           setLoading(false);
         });
     }, []);

  return (
   <div>
    <Container>
    <div className="entry">
     <h2>Search Birds</h2>
     </div>
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
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
         {birds.filter(bird =>
             search.trim() === '' ||
                (bird.bird_species &&
                    bird.bird_species
                      .toLowerCase()
                      .includes(search.toLowerCase().trim())) ||
                  (bird.location &&
                    bird.location
                      .toLowerCase()
                      .includes(search.toLowerCase().trim())) ||
                  (bird.date &&
                    bird.date
                      .toLowerCase()
                      .includes(search.toLowerCase().trim())) ||
                    (bird.description &&
                      bird.description
                        .toLowerCase()
                        .includes(search.toLowerCase().trim())) ||
                    (bird.username &&
                      bird.username
                        .toLowerCase()
                        .includes(search.toLowerCase().trim()))
           ).map(bird => (
            <tr key={bird.id}>
              <td>{bird.bird_species}</td>
              <td>{bird.location}</td>
              <td>{bird.date}</td>
              <td>{bird.description}</td>
              <td>{bird.username}</td>
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
