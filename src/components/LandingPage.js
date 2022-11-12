import React from 'react'
import { useState } from 'react';
import styles from './LandingPage.css'


function LandingPage(props) {
    const [isShow,setIsShow] = useState(true)
  return (
    <div className={props.landClass}>
      <div className='instructions'>
        <h1>Rules</h1>
        <p>The game has 2 players, playing in rounds.
        In each turn, a player rolls 2 dice as many times as he
        wishes.<br></br>
        Each result will get added to his round’s score.
        But if the player rolls a double six all his round’s score
        gets lost.<br></br>
        After that, it's the next player’s turn.
        A player can choose to ‘Hold’, which means that his
        round’s score gets added to his global score.
        After that, it's the next player's turn.
        The first player to reach 100 points wins</p>
        <button className='btn' onClick={props.click}>Starttttt Game
        </button>
      </div>
    </div>
  )
}

export default LandingPage