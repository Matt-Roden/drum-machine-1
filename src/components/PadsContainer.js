import React from 'react'
import Pad from './Pad'
import '../styles/PadsContainer.scss'

const Padscontainer = ({ audioBank, volume }) => {

  const pads = audioBank.map((clip) => {
    return (
      <Pad key={clip.id} clip={clip} volume={volume}/>
    )
  })

  return (
    <div className='pads-container'>
      {pads}
    </div>
  )
}

export default Padscontainer
