import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='facetext'>
        {'Face Detector'}
      </p>
      <div className="box">
        <div className='inputbut'>
          <input type='box' className='imginput' onChange={onInputChange}/>
          <button className='button' onClick={onButtonSubmit}>Detect</button>
      </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
