import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';

function Hotspots() {

    const [bird, setBird] = useState([]);
    var myHeaders = new Headers();
    myHeaders.append("X-ebirdapitoken", "fg0i8qiujsqk");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };



    fetch('https://api.ebird.org/v2/ref/hotspot/US-MO-189', requestOptions)
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.log('error', error));

    return (
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>
            </tr>
            </thead>
            <tbody>
            {bird.map((list, index) => {
            return(
            <tr>
                <td key={index}>{list}</td>
            </tr>
            );
            })}
           </tbody>
        </table>
    )
}
export default Hotspots;