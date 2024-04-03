import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';
import styles from '../hotspot.css'

function NorthAmerica() {
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
        <table>
        <h1 className="image">
        <img src='https://cdn-icons-png.flaticon.com/512/6195/6195392.png' width={250} height={250}></img>
        </h1>
        <thead>
            <tr>
            <div className="header">
                <h2>Bird Gallery</h2>
            </div>
            </tr>
            </thead>
            <body>
            {bird.map((entities) => {
            return(
            <div className="text">
            <div className="container">
                            <div className="img">
                            <img src={entities.images[0]} width={250} height={250}></img>
                            </div>
                <p>
                    <h2 className="title">{entities.name}</h2>
                            <div className="list">
                            <div className="column">
                                <li>ID: {entities.id}</li>
                                <li>Sci-Name: {entities.sciName}</li>
                                <li>Status: {entities.status}</li>
                                <li>Region: {entities.region[0]}</li>
                            </div>
                            </div>
                            <div className="list">
                            <div className="column">
                                <li>Order: {entities.order}</li>
                                <li>Species: {entities.family}</li>
                                <li>Size: {entities.lengthMax} in.</li>
                                <li>Wingspan: {entities.wingspanMax}</li>
                            </div>
                            </div>
                            </p>

            </div>
            </div>
            );
            })}
           </body>
        </table>
    )
}
export default NorthAmerica;