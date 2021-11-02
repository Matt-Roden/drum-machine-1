import React from 'react'
import PadsContainer from './PadsContainer';
import '../styles/App.scss';
import audioBank from '../audioData'

const App = () => {
  return (
    <div className="App">
      <PadsContainer audioBank={audioBank} key={Date.now()}/>
    </div>
  );
}

export default App;