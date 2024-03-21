import React from "react";
import ebird from "../components/eBird"
import { useState, useEffect } from 'react';
import app from '../App'

function Hotspots() {
    fetch('/v2/ref/hotspot/geo?lat={{lat}}&lng={{lng}}', {
        headers: {
            'api-key': 'fg0i8qiujsqk'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })


}

export default Hotspots;