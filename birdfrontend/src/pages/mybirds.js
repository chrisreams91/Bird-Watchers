import React from "react";
import { useState } from 'react';
import EnterMyBirdData from '../components/EnterMyBirdData'
import MP3Player from '../components/MP3Player'
import MP3Upload from '../components/MP3Upload'


//import CallMyBirdData from '../components/CallMyBirdData'

function MyBirds() {
  return (
  <div>
   <EnterMyBirdData/>

   <MP3Player/>
   //call CallMyBirdData here when component is ready
   </div>
  );
}

export default MyBirds;
