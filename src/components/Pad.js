import React, { useEffect, useState } from 'react';
import '../styles/Pad.scss'

const Pad = ({ clip, volume }) => {

  const [active, setActive] = useState(false)

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
    setActive(true);
    setTimeout(() => setActive(false, 200))
    audioTag.volume = volume
    audioTag.currentTime = 0;
    audioTag.play()
  }

  return (
    <div onClick={playSound} className={`single-pad ${active && 'pad-active'}`}>
      <audio className='clip' id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  )
};

export default Pad;
