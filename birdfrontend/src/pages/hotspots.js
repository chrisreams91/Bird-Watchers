import React from "react";
import ebird from "../components/eBird";
import { useState, useEffect } from 'react';
import app from '../App';
import styles from '../hotspot.css'

function Hotspots() {


    return (
    <div className="color">
        <div className="header">
            <h2>BirdMap</h2>
            <div className="display">
            <div className="btn">
                <button className="btn">
                    <a href='hotspots/NorthAmerica'>
                        <img className= 'imgbtn' src='https://cdn-icons-png.freepik.com/512/6195/6195523.png'></img>
                    </a>
                </button>
                <button className ="btn">
                    <a href='/hotspots/Europe'>
                        <img className= 'imgbtn' src='https://cdn-icons-png.flaticon.com/512/6195/6195392.png'></img>
                    </a>
                </button>
            </div>
            </div>
        </div>
    </div>
    )
}
export default Hotspots;