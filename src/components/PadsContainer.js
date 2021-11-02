import React from 'react'
import Pad from './Pad'
import '../styles/PadsContainer.scss'

const Padscontainer = ({ audioBank }) => {

  const pads = audioBank.map((clip) => {
    return (
      <Pad key={clip.id} clip={clip}/>
    )
  })

  return (
    <div className='pads-container'>
      {pads}
    </div>
  )
}

export default Padscontainer
