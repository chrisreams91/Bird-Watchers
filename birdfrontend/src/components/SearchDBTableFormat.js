import React from "react";
import { useState, useEffect } from 'react';



function SearchDBTableFormat() {

    const[birds, setBirds]=useState([])
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

     const handleClick=(event)=>{
        event.preventDefault()
        }

    useEffect(() =>{
        fetch("http://localhost:8080/mybirds/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setBirds(result);
        }
    )
    },[])

    const filterResults = () => {
      const filtered = birds.filter((birds) => {
        return birds.bird_species.toLowerCase().includes(query.toLowerCase());
      });
      setResults(filtered);
    };

    return (
		<>
            <br />
            Search Community Bird Database:
            <input
              type="text"
              value={query}
              onChange={(e) => {
              setQuery(e.target.value);
              filterResults();
              }}
              placeholder="Search for birds..."
            />
            <button type="submit" onClick={handleClick}>Search</button>
            <br />
            <h3>Results:</h3>
                <div>
                    <th>IDs</th>
                    <th>Bird Species</th>
                    <th>Location Seen</th>
                    <th>Date Seen</th>
                    <th>Field Notes</th>
                  {birds.map((bird) => (
                    <tr key={bird.id}>
                      <td>Id: {bird.id}</td>
                      <td>Name: {bird.bird_species}</td>
                      <td>Location: {bird.location}</td>
                      <td>Date: {bird.date}</td>
                      <td>Field Notes: {bird.description}</td>
                    </tr>
                  ))}
                </div>
		</>
	);
};

export default SearchDBTableFormat;



