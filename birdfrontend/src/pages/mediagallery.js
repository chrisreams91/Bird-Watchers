import React, { useState,useEffect } from "react";
import SoundUpload from "../components/SoundUpload";
import PictureUpload from "../components/PictureUpload";
import Email from "../components/EmailAdmin";



function MediaGallery() {

    return (
    <>
    <div>
    <h1>We Invite You To Share Your Exceptional Pictures And Sound Clips From The Field Here!</h1>
    <SoundUpload />
    <PictureUpload />
    </div>
    <div>
    <br/>
    <br/>
    <h3>Report any concerns to Admin</h3>
    <Email />
    </div>
    </>
    )


}

export default MediaGallery;