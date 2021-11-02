import React, { useState, useEffect } from 'react'
import PadsContainer from './PadsContainer';
import '../styles/App.scss';
import audioBank from '../audioData'

const App = () => {
  const [volume, setVolume] = useState(1)

  return (
    <div className="App">
      <h1>MPC 2021: v1</h1>
      <section className='drum-machine'>
        <PadsContainer audioBank={audioBank} key={Date.now()} volume={volume}/>
        <div className='controls'> 
          <h4>Volume</h4>
          <input 
            className='volume-fader' 
            type='range' 
            step='0.01' 
            value={volume} 
            max='1' 
            min='0'
            onChange={(e) => setVolume(e.target.value)}  
          />
        </div>
      </section>
    </div>
  );
}

export default App;