import React, { useState,useEffect } from "react";
import SoundUpload from "../components/SoundUpload";
import PictureUpload from "../components/PictureUpload";


function MediaGallery() {

    return (

    <div>
    <h1>We Invite You To Share Your Exceptional Pictures And Sound Clips From The Field Here!</h1>
    <SoundUpload />
    <PictureUpload />
    </div>

    )


}

export default MediaGallery;