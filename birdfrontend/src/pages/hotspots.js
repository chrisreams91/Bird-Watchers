import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';

function Hotspots() {

    const [bird, setBird] = useState();


    var myHeaders = new Headers();
    myHeaders.append("X-ebirdapitoken", "fg0i8qiujsqk");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    useEffect(() => {
    fetch('https://api.ebird.org/v2/ref/hotspot/US-MO-189', requestOptions)
      .then(response => response.text())
      .then(result => {
              setBird(result);
              console.log(result);
            });
    }, []);

//    return (
//        <>
//            <h1>Hotspots in STL</h1>
//            {bird.map((name) => {
//                return <p>{name}</p>
//            })}
//        </>
//    );
}
export default Hotspots;