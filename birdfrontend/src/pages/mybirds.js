import React from "react";
import { useState } from 'react';
import EnterMyBirdData from '../components/EnterMyBirdData'
import MP3Player from '../components/MP3Player'
import MP3Upload from '../components/MP3Upload'


function MyBirds() {
  return (
  <div>
   <EnterMyBirdData/>
   <MP3Player/>

   </div>
  );
}

export default MyBirds;
