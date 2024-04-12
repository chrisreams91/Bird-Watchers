import React, { useState,useEffect, useCallback } from "react";
import Axios from 'axios'
import styles from "../mediagallery.css";
import {ref,uploadBytes,getDownloadURL,listAll,list,} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";


function SoundUpload() {

    const [soundUpload, setSoundUpload] = useState(null);
      const [soundUrls, setSoundUrls] = useState([]);

      const soundListRef = ref(storage, "sounds/");
      const uploadFile = () => {
        if (soundUpload == null) return;
        const soundRef = ref(storage, `sounds/${soundUpload.name + v4()}`);
        uploadBytes(soundRef, soundUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setSoundUrls((prev) => [...prev, url]);
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
                onChange={(event) => {
                  setSoundUpload(event.target.files[0]);
                }}
              />
              <button onClick={uploadFile}> Upload Sound</button>
              {soundUrls.map((url) => {
                return (
                  <audio src={url} controls>
                    Your browser does not support the audio element.
                  </audio>
                );
              })}
        </div>

    )
}

export default SoundUpload;