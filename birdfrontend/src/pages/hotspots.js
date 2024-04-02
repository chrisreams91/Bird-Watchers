import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';
import styles from '../hotspot.css'

function Hotspots() {
    const [bird, setBird] = useState([]);
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch('https://nuthatch.lastelm.software/v2/birds?&page=1&pageSize=100&hasImg=true&operator=AND', {
            headers: {
                'api-key': '65930e9d-a183-455c-9fda-a2dc40a61935'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setBird(data.entities);
            console.log(data.entities);
        }
        );
    }, []);



    return (
        <button>
        <img src='https://cdn-icons-png.freepik.com/512/6195/6195523.png'></img>
        <table>
        <thead>
            <tr>
            <div className="header">
                <h2>Bird Gallery</h2>
            </div>
            </tr>
            </thead>
            <tbody>
            {bird.map((entities) => {
            return(
            <div className="text">
            <div className="container">
                            <div className="image">
                            <img src={entities.images[0]} width={250} height={250}></img>
                            </div>
            <tr>
                <p>
                    <h2>{entities.name}</h2>
                            <div className="column">
                                <li>ID: {entities.id}</li>
                                <li>Sci-Name: {entities.sciName}</li>
                                <li>Status: {entities.status}</li>
                                <li>Region: {entities.region[0]}</li>
                            </div>
                            <div className="column">
                                <li>Order: {entities.order}</li>
                                <li>Species: {entities.family}</li>
                                <li>Size: {entities.lengthMax} in.</li>
                                <li>Wingspan: {entities.wingspanMax}</li>
                            </div>
                            </p>
            </tr>
            </div>
            </div>
            );
            })}
           </tbody>
        </table>
        </button>
    )
}
export default Hotspots;