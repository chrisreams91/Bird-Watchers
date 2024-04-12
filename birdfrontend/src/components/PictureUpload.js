import React, { useState,useEffect } from "react";
import Axios from 'axios'
import styles from "../mediagallery.css";
import {ref,uploadBytes,getDownloadURL,listAll,list,} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";


function PictureUpload() {

    const [imageUpload, setImageUpload] = useState(null);
      const [imageUrls, setImageUrls] = useState([]);

      const imagesListRef = ref(storage, "images/");
      const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      };

    const [fetchedUrls, setFetchedUrls] = useState(false);

    useEffect(() => {
      if (!fetchedUrls) {
        listAll(imagesListRef).then((response) => {
          const urls = response.items.map((item) => getDownloadURL(item));
          Promise.all(urls).then((imageUrls) => {
            setImageUrls(imageUrls);
            setFetchedUrls(true);
          });
        });
      }
    }, [fetchedUrls]);



    return (
     <div>
        <h2>Choose a Picture</h2>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      </div>
    )
}

export default PictureUpload;