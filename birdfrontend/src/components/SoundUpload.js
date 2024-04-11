import React, { useState,useEffect, useCallback } from "react";
import { Cloudinary } from 'cloudinary-core';
import Axios from 'axios'
import styles from "../mediagallery.css";



function SoundUpload() {

    const [soundSelected, setSoundSelected] = useState("");

    const uploadSound = ()  => {
        const formData = new FormData()
        formData.append("file", soundSelected);
        formData.append("upload_preset", "xxaadgaf")
        Axios.post("https://api.cloudinary.com/v1_1/dtl0tltjw/upload", formData)
            .then((response)=> {
                console.log(response);
            })
        }

    return (

    <div>
        <h2>Choose a Sound File</h2>
        <input type="file" onChange={(event)=> {setSoundSelected(event.target.files[0])}} />
        <button onClick={uploadSound}>Upload Sound</button>

         <audio controls src={"https://res.cloudinary.com/dtl0tltjw/video/upload/v1712864560/cpiqcfq1r5qu51nqzmdl.mp3"}>
         </audio>
         <audio controls src={"https://res.cloudinary.com/dtl0tltjw/video/upload/v1712867007/etfkprn9of09xicqc9hx.mp3"}>
         </audio>
    </div>

    )



}

export default SoundUpload;