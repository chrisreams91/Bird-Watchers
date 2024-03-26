import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';

function Hotspots() {
    const [bird, setBird] = useState([]);

    useEffect(() => {
        fetch('https://nuthatch.lastelm.software/v2/birds', {
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
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Location</th>
                <th>Visual</th>
            </tr>
            </thead>
            <tbody>
            {bird.map((entities) => {
            return(
            <tr>
                <td>{entities.id}</td>
                <td>{entities.name}</td>
                <td>{entities.status}</td>
                <td>{entities.region}</td>
                <img src={entities.images} width={500}></img>
            </tr>
            );
            })}
           </tbody>
        </table>
    )
}
export default Hotspots;