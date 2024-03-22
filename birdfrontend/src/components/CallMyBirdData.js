import React from "react";
import { useState, useEffect } from 'react';

function CallMyBirdData() {

  const[bird, setBird]=useState([])

useEffect(() =>{
    fetch("http://localhost:8080/mybirds/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setBird(result);
    }
)
},[])

    return null

}

export default CallMyBirdData;