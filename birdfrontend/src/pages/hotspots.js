import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';

function Hotspots() {
    const [bird, setBird] = useState([]);

    useEffect(() => {
        fetch('https://freetestapi.com/api/v1/birds')
        .then((response) => response.json())
        .then((data) => {
            setBird(data);
            console.log(data);
        }
        );
    }, []);

    return (
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>
                <th>Habitat</th>
            </tr>
            </thead>
            <tbody>
            {bird.map((data) => {
            return(
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.place_of_found}</td>
                <td>{data.habitat}</td>
            </tr>
            );
            })}
           </tbody>
        </table>
    )
}
export default Hotspots;