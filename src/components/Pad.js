import React, { useEffect } from 'react';
import '../styles/Pad.scss'

const Pad = ({ clip }) => {

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleKeyPress = (event) => {
    if(event.keyCode === clip.keyCode) {
      playSound()
    }
  }

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger)
    audioTag.currentTime = 0;
    audioTag.play()
  }

  return (
    <div onClick={playSound} className='single-pad'>
      <audio className='clip' id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  )
};

export default Pad;
