import React from 'react';
import axios from 'axios';

export default function Navbar() {

    const handleLogout = async () => {
    try {
        await axios.delete('http://localhost:8080/logout');
        localStorage.removeItem('jwtToken');
        window.location.href = '/login';
        } catch (error) {
            console.error("Error upon logout");
        }
    };

    return ( <nav className="nav">
        <a href="/home" className="site-title">Bird Tracker</a>
        <ul>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/register">Register Here!</a>
            </li>
            <li>
                <a href="/hotspots">Bird Map</a>
            </li>
            <li>
                <a href="/mybirds">My Birds</a>
            </li>
            <li>
                <a href="/otherbirders">Birders</a>
            </li>
            <li>
                <a href="/search">Search Community Sightings</a>
            </li>
            <li>
                <a href="/blog">Blog Postings</a>
            </li>
            <li>
                <a href="/donations">Make a Donation Request</a>
            </li>
            <li>
                <a href="/mediagallery">Media Gallery</a>
            </li>
            <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
    </nav>
    )
}