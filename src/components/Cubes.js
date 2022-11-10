import React from 'react'
import { useState } from 'react';
// import image1 from 'images/dice1.png'
// import MyImage from '..images/dice1.png';
let playerOneScore=0
let playerTwoScore=0
let currentTurn = 1;
let winner = null;
function Cubes() {

    const [firstCube,setFirstCube] = useState(null);
    const [secondCube,setSecondCube] = useState(null);

const setWinner = () => {
    if (playerOneScore == 100) {
        winner = "Player One Win"
        console.log(winner);
    }
    if (playerOneScore > 100) {
        winner = "Player Two Win"
        console.log(winner);
    }
    if (playerTwoScore ==100) {
        winner = "Player Two Win"
        console.log(winner);

    }
    if (playerTwoScore > 100) {
        winner = "Player One Win"
        console.log(winner);

    }


}    

const changeTurn = () => {
    if (currentTurn==1) {
        currentTurn=2
        setFirstCube(0)
        setSecondCube(0)
    }
    else  {
        currentTurn=1
        setFirstCube(0)
        setSecondCube(0)
    }
    console.log(currentTurn);
    
}    
const updateScore = () => {
    if (currentTurn == 1) {
        playerOneScore = playerOneScore+firstCube+secondCube
        setWinner();

           
    }
    if (currentTurn == 2){
        playerTwoScore = playerTwoScore+firstCube+secondCube
        setWinner();


    }


}
    const rollADie = () => {
        updateScore();
        setFirstCube( Math.floor(Math.random() * 6) + 1)
        setSecondCube(Math.floor(Math.random() * 6) + 1)

    }




  return (
    <div>
        <button onClick={rollADie}> Roll A Die </button>
        <button onClick={changeTurn}> Hold </button>
        {/* <img src={MyImage} alt="firstCube" /> */}
        <div>{firstCube},{secondCube}</div>
        <div>player one : {playerOneScore}</div>
        <div>player two : {playerTwoScore}</div>
        <h2>{winner}</h2>

    </div>
  )
}

export default Cubes