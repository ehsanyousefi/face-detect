import React from 'react'
import './Logo.css'
import logo from './logo.png'
import Tilt from 'react-tilt'

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max : 30 }} style={{ height: 80, width: 150 }} >
        <div className="Tilt-inner"><img className="logo" alt="" src={logo}/></div>
      </Tilt>
    </div>
  )
}

export default Logo
