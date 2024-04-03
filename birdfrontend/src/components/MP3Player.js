import React, { useState,useEffect } from "react";
import styles from '../mp3player.css'

//this is a test sound file
const moby = require('./Kalimba.mp3')
const Sound = new Audio(moby)

function MP3Player() {

    const [playInLoop, setPlayInLoop] = useState(false);

      useEffect(()=> {
        Sound.load();
      }, [])

      useEffect(() => {
        Sound.loop = playInLoop
      },[playInLoop])

      const playSound = () => {
        Sound.play();
      }

      const pauseSound = () => {
        Sound.pause();
      }

    const stopSound = () => {
      Sound.pause();
      Sound.currentTime = 0;
    }

    return (
         <div>
           <h3>Sound Player</h3>
           <div className="button">
           <input
           type='button'
           className='mp3-player-button btn btn-primary mr-2'
           value='play'
           onClick={playSound}/>
           <input
           type='button'
           className='mp3-player-button btn btn-warning mr-2'
           value='pause'
           onClick={pauseSound}/>
           <input
           type='button'
           className='mp3-player-button btn btn-danger mr-3'
           value='stop'
           onClick={stopSound}/>
           <label><input type='checkbox' checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)}/></label>
           </div>
         </div>

       );

}

export default MP3Player;