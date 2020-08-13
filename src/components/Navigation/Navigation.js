import React from 'react'
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div>
        <p href='#' onClick={() => onRouteChange('signin')} className="psignout">Sign Out</p>
      </div>
    )
  }
}

export default Navigation
