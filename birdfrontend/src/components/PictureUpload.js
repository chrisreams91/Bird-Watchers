import React, { useState,useEffect } from "react";
import Axios from 'axios'
import { Cloudinary } from 'cloudinary-core';
import {Image} from 'cloudinary-react'
import styles from "../mediagallery.css";


function PictureUpload() {

    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = ()  => {
        const formData = new FormData()
        formData.append("file", imageSelected);
        formData.append("upload_preset", "dxqzprav")

        Axios.post("https://api.cloudinary.com/v1_1/dtl0tltjw/image/upload", formData)
        .then((response)=> {
            console.log(response);
        })
    }

    return (
     <div>
        <h2>Choose a Picture</h2>
        <input type="file" onChange={(event)=> {setImageSelected(event.target.files[0])}} />
        <button onClick={uploadImage}>Upload Image</button>

        <Image
        cloudName="dtl0tltjw"
        publicId="https://res.cloudinary.com/dtl0tltjw/image/upload/v1712864561/plzbajgtvqxbvlr36qzp.png"/>
         <Image
        cloudName="dtl0tltjw"
        publicId="https://res.cloudinary.com/dtl0tltjw/image/upload/v1712866758/t0hxcdy7mywdks5vwbrq.jpg"/>
        <Image
        cloudName="dtl0tltjw"
        publicId="https://res.cloudinary.com/dtl0tltjw/image/upload/v1712866957/hde2ygppokxwrhq69ue3.jpg"/>
     </div>
    )
}

export default PictureUpload;