import React from 'react'
import { useState } from 'react';
import styles from './LandingPage.css'


function LandingPage(props) {
    const [isShow,setIsShow] = useState(true)
  return (
    <div className={props.landClass}>
        <button onClick={props.click}>Starttttt Game
        </button>
    </div>
  )
}

export default LandingPage