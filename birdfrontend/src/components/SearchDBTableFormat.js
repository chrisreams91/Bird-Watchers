import React from "react";
import { useState, useEffect } from 'react';



function SearchDBTableFormat() {

    const[birds, setBirds]=useState([])

    /*const search = (bird) => { return bird.filter((item)=>item.species.toLowerCase().includes(query) || item.date.toLowerCase().includes(query) || item.location.toLowerCase().includes(query) )} */

        useEffect(() =>{
            fetch("http://localhost:8080/mybirds/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setBirds(result);
            }
        )
        },[])


    return (
		<>
            <br />
            Search Community Bird Database pending:
            <input type="text" placeholder="search for birds here..." className="search" />
            <br />
            <h3>Results:</h3>
                <div>
                    <th>IDs</th>
                    <th>Bird Species</th>
                    <th>Location Seen</th>
                    <th>Date Seen</th>
                    <th>Field Notes</th>
                    <th>Photo</th>
                    <th>Sound File</th>
                  {birds.map((bird) => (
                    <tr key={bird.id}>
                      <td>Id: {bird.id}</td>
                      <td>Name: {bird.bird_species}</td>
                      <td>Location: {bird.location}</td>
                      <td>Date: {bird.date}</td>
                      <td>Field Notes: {bird.description}</td>
                      <td>Photo: {bird.photo}</td>

                    </tr>
                  ))}
                </div>
		</>
	);
};

export default SearchDBTableFormat;



