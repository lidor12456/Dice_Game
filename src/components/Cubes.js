import React from 'react'
import { useState } from 'react';
import styles from './Cube.css'
import image0 from '../images/dice0.png'
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
let playerOneWinningCounter =0
let playerTwoWinningCounter =0

//  imagee = require("../images/dice1.png");

function Cubes() {
    let img_arr = [image0,image1,image2,image3,image4,image5,image6] 
    const [firstCube,setFirstCube] = useState(0);
    const [secondCube,setSecondCube] = useState(0);
    const [firstCubeImg,setFirstCubeImg] = useState('');
    const [secondCubeImg,setSecondCubeImg] = useState('');
    // const [playerOneScore,setPlayerOneScore] = useState(0)
    // const [playerTwoScore,setPlayerTwoScore] = useState(0)
    let currentScore=firstCube+secondCube

    const firstRoll = () => {
        setFirstCube(0)
        setSecondCube(0)
        console.log(firstCube);
        console.log(secondCube);
    }


    const rollADie = () => {
        if (hasWinner) {
            return
        }
        firstRoll()

        setFirstCube( Math.floor(Math.random() * 6) + 1)
        setSecondCube(Math.floor(Math.random() * 6) + 1)
        console.log(firstCube);
        console.log(secondCube);
        
        updateScore();
        checkDouble()
        if (firstCube==0){
            setFirstCubeImg(image0)
        }
        else {

            setFirstCubeImg(img_arr[firstCube])
        }
        if (secondCube==0){
            setSecondCubeImg(image0)
        }
        else {

            setSecondCubeImg(img_arr[secondCube])
        }
 

  
    }

const checkDouble = () => {
    if(currentTurn==1) {
        if (currentScore==12) {
            playerOneScore=0;
            currentTurn=2
        }

    }
    if(currentTurn==2) {
        if (currentScore==12) {
            playerTwoScore=0;
            currentTurn=1
        }


    }



}
const checkWinning = () => {
    if (playerOneScore == 100) {
        playerOneWon = "Player One Win!"
        hasWinner=true;
        playerOneWinningCounter++
       
    }
    if (playerOneScore > 100) {
        playerTwoWon = "Player Two Win!"
        hasWinner=true;
        playerTwoWinningCounter++


        
    }
    if (playerTwoScore ==100) {
        playerTwoWon = "Player Two Win!"
        hasWinner=true;
        playerTwoWinningCounter++


        

    }
    if (playerTwoScore > 100) {
        playerOneWon = "Player One Win!"
        hasWinner=true;
        playerOneWinningCounter++


        
    }


}
const updateScore = () => {
    if (currentTurn == 1) {
        currentScore=firstCube+secondCube
        // currentScore =  setFirstCube((prev)=>prev + firstCube) + setSecondCube((prev)=>prev + secondCube)
        playerOneScore = playerOneScore+currentScore
        checkWinning();

           
    }
    if (currentTurn == 2){
        currentScore=firstCube+secondCube
        // currentScore =  setFirstCube((prev)=>prev + firstCube) + setSecondCube((prev)=>prev + secondCube)

        playerTwoScore = playerTwoScore+currentScore;
        // currentScore=0
        checkWinning();
    }
}    

const changeTurn = () => {
    // if (hasWinner) {
    //     return
    // }
    if (currentTurn==1) {
        checkWinning()
        currentScore=firstCube+secondCube
        playerOneScore = playerOneScore+currentScore
        currentScore=0
        currentTurn=2
        setFirstCube(0)
        setSecondCube(0)
    }
    else  {
        checkWinning()
        currentScore=firstCube+secondCube
        playerTwoScore = playerTwoScore+currentScore
        currentScore=0
        currentTurn=1
        setFirstCube(0)
        setSecondCube(0)
    }
    console.log(currentTurn);
    
}    

const restartGame = () => {
    playerOneScore=0
    playerTwoScore=0
    currentScore=0
    setFirstCube(0)
    setSecondCube(0)
    hasWinner=false
    playerOneWon=''
    playerTwoWon=''

}



//! Todo -  dubble six logic + landing page + utils + cubes, optional : winning counter//

  return (
    <div className='game-board'>
        <div className='player-one left-side'>
            <h2>Player One</h2>
            <img src={avatar1}></img>
            <p>Your Score : {playerOneScore}</p>
            <p>Winnings : {playerOneWinningCounter}</p>
            <h3>{playerOneWon}</h3>

        </div>
        <div className='center-content'>

        <p>Current Score : {currentScore}</p>

        <div className='cubes'>

        {/* <img src={image1} alt="image not found" /> */}
        {secondCube==0?
        <><img src={image0} alt="image not found" /></>:
        <><img src={secondCubeImg} alt="image not found" />
        </>
        }
        <br></br>
        {firstCube==0?
        <><img src={image0} alt="image not found" /></>:
        <><img src={firstCubeImg} alt="image not found" />
        </>
        }
        </div>
        <div className='btns'>
        <button onClick={rollADie}> Roll A Dice </button><br></br>
        <button onClick={changeTurn}> Hold </button><br></br>
        <button onClick={restartGame}> New Game </button>
        </div>

        <div>{firstCube},{secondCube}</div>
        </div>

        <div className='player-two right-side'>
            <h2>Player Two</h2>
            <img src={avatar2}></img>
            <p> Your Score : {playerTwoScore}</p>
            <p>Winnings : {playerTwoWinningCounter}</p>
            <h3>{playerTwoWon}</h3>

        </div>

        
        


    </div>
  )
}

export default Cubes