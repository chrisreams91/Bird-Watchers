import React, { useState,useEffect } from "react";


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
           <h3>Moby porcelain</h3>
           <input
           type='button'
           className='btn btn-primary mr-2'
           value='play'
           onClick={playSound}/>
           <input
           type='button'
           className='btn btn-warning mr-2'
           value='pause'
           onClick={pauseSound}/>
           <input
           type='button'
           className='btn btn-danger mr-3'
           value='stop'
           onClick={stopSound}/>
           <label><input type='checkbox' checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)}/></label>
         </div>

       );

}

export default MP3Player;