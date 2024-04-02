import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';
import styles from '../hotspot.css'

function Hotspots() {
    const [bird, setBird] = useState([]);

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
        <thead>
            <tr>
            <div className="header">
                <th>Bird Gallery</th>
            </div>
            </tr>
            </thead>
            <tbody>
            {bird.map((entities) => {
            return(
            <div className="container">
                            <div className="image">
                            <img src={entities.images[0]} width={400} height={400}></img>
                            </div>
            <tr>
                <div className="text">
                <p>
                                <li>ID: {entities.id}</li>
                                <li>Name: {entities.name}</li>
                                <li>Status: {entities.status}</li>
                                <li>Region: {entities.region}</li>
                            </p>
                            </div>
            </tr>
            </div>
            );
            })}
           </tbody>
        </table>
    )
}
export default Hotspots;