import React from "react";
import { useState } from 'react';
import EnterMyBirdData from '../components/EnterMyBirdData'
import MP3Player from '../components/MP3Player'
//import CallMyBirdData from '../components/CallMyBirdData'

function MyBirds() {
  return (
  <div>
   <EnterMyBirdData/>
   //call CallMyBirdData here when component is ready
   <MP3Player/>
   </div>
  );
}

export default MyBirds;
