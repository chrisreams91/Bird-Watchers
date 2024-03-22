import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';

function Hotspots() {

    const [data, setData] = useState(null);
    var myHeaders = new Headers();
    myHeaders.append("X-ebirdapitoken", "fg0i8qiujsqk");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.ebird.org/v2/data/obs/KZ/recent", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
export default Hotspots;