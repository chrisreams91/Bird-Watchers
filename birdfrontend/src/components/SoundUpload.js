import React, { useState, useEffect } from "react";
import Axios from 'axios'
import styles from "../mediagallery.css";
import {ref,uploadBytes,getDownloadURL,listAll,list,} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { deleteObject } from "firebase/storage";


function SoundUpload() {



const deleteSound = (url) => {
    if (window.confirm("Are you sure you want to delete this sound? This action cannot be undone!")) {
      const soundRef = ref(storage, url);
      deleteObject(soundRef)
        .then(() => {
          console.log("Sound deleted successfully!");
          setSoundUrls((prev) => prev.filter((prevUrl) => prevUrl !== url));
        })
        .catch((error) => {
          console.error("Error deleting sound:", error);
        });
    }
  };

    const [soundUpload, setSoundUpload] = useState(null);
    const [soundUrls, setSoundUrls] = useState([]);

      const soundListRef = ref(storage, "sounds/");
      const uploadFile = () => {
        if (soundUpload == null) return;
        const soundRef = ref(storage, `sounds/${soundUpload.name + v4()}`);
        uploadBytes(soundRef, soundUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setSoundUrls((prev) => [...prev, url]);
            setSoundUpload(null);
          });
        });
      };

     useEffect(() => {
       listAll(soundListRef).then((response) => {
         const urls = response.items.map((item) => getDownloadURL(item));
         Promise.all(urls).then((soundUrls) => {
           setSoundUrls(soundUrls);
         });
       });
     }, []);

    return (

     <div>
            <h2>Choose a Sound File</h2>
                <input
                type="file"
                accept="audio/*"
                onChange={(event) => {
                  setSoundUpload(event.target.files[0]);
                }}
              />
              <button onClick={uploadFile}> Upload Sound</button>
              <ol>
             {soundUrls.map((url) => {
               return (
                 <li key={url}>
                   <audio src={url} controls>
                   </audio>
                    <button onClick={() => deleteSound(url)}>Delete</button>
                 </li>
               );
             })}
             </ol>
        </div>

    )
}

export default SoundUpload;