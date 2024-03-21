import React from "react";
import { useState, useEffect } from 'react';

function CallMyBirdData() {

  const[bird, setBird]=useState([])

//useEffect(() =>{
//    fetch("http://localhost:8080/mybirds/getAll")
//    .then(res=>res.json())
//    .then((result)=>{
//        setBird(result);
//    }
//)
//},[])




    return (

//    <h1>My Birds</h1>
//    <div>
//        <ul>
//            {bird.map((bird, index)=>(
//                <li key={index}>{bird.id} | {bird.bird_species} | {bird.location} | {bird.date}</li>
//            ))}
//        </ul>
//    </div>
//    </div>

    )
}

export default CallMyBirdData;