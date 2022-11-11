import React from 'react'
import { useState } from 'react';
import styles from './Cube.css'
import image1 from '../images/dice1.png'
import image2 from '../images/dice2.png'
import image3 from '../images/dice3.png'
import image4 from '../images/dice4.png'
import image5 from '../images/dice5.png'
import image6 from '../images/dice6.png'
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avatar2.png'

// import MyImage from '..images/dice1.png';
let playerOneScore=0
let playerTwoScore=0
let currentTurn = 1;
let playerOneWon='';
let playerTwoWon='';
let hasWinner = false;
let currentScore=0;
//  imagee = require("../images/dice1.png");

function Cubes() {

    const [firstCube,setFirstCube] = useState(null);
    const [secondCube,setSecondCube] = useState(null);
    // const [playerOneScore,setPlayerOneScore] = useState(0)
    // const [playerTwoScore,setPlayerTwoScore] = useState(0)

    const rollADie = () => {
        if (hasWinner) {
            return
        }
        
        setFirstCube( Math.floor(Math.random() * 6) + 1)
        setSecondCube(Math.floor(Math.random() * 6) + 1)
        updateScore();
  
    }


const checkWinning = () => {
    if (playerOneScore == 100) {
        playerOneWon = "Player One Win!"
        hasWinner=true;
       
    }
    if (playerOneScore > 100) {
        playerTwoWon = "Player Two Win!"
        hasWinner=true;

        
    }
    if (playerTwoScore ==100) {
        playerTwoWon = "Player Two Win!"
        hasWinner=true;

        

    }
    if (playerTwoScore > 100) {
        playerOneWon = "Player One Win!"
        hasWinner=true;

        
    }


}    

const changeTurn = () => {
    if (currentTurn==1) {
        currentScore=firstCube+secondCube
        playerOneScore = playerOneScore+currentScore
        currentScore=0
        currentTurn=2
        setFirstCube(0)
        setSecondCube(0)
    }
    else  {
        currentScore=firstCube+secondCube
        playerTwoScore = playerTwoScore+currentScore
        currentScore=0
        currentTurn=1
        setFirstCube(0)
        setSecondCube(0)
    }
    console.log(currentTurn);
    
}    
const updateScore = () => {
    if (currentTurn == 1) {
        currentScore=firstCube+secondCube
        playerOneScore = playerOneScore+currentScore
        // currentScore=0

        // setPlayerOneScore((prev) => prev + firstCube+secondCube)
        checkWinning();

           
    }
    if (currentTurn == 2){
        currentScore=firstCube+secondCube
        playerTwoScore = playerTwoScore+currentScore;
        // currentScore=0
        // setPlayerTwoScore((prev) => prev + firstCube+secondCube)
        checkWinning();


    }


}




  return (
    <div className='game-board'>
        <div className='player-one left-side'>
            <h2>Player One</h2>
            <img src={avatar1}></img>
            <p>Your Score : {playerOneScore}</p>
            <h2>{playerOneWon}</h2>

        </div>
        <div className='center-content'>

        <div>current Score : {currentScore}</div>

        <div className='cubes'>
        <img src={image1} alt="image not found" />
        <img src={image2} alt="image not found" />
        </div>
        <button onClick={rollADie}> Roll A Die </button>
        <button onClick={changeTurn}> Hold </button>

        <div>{firstCube},{secondCube}</div>
        </div>

        <div className='player-two right-side'>
            <h2>Player Two</h2>
            <img src={avatar2}></img>
            <p> Your Score : {playerTwoScore}</p>
            <h3>{playerTwoWon}</h3>

        </div>

        
        


    </div>
  )
}

export default Cubes