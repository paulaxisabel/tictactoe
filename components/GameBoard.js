import { useEffect, useState, useRef } from "react";
import {useDispatch} from "react-redux";
import {playerTurn, playerScore, opponentScore, tieScore} from "../actions"; 
import "../styles/GameBoard.scss";

function GameBoard({playerMark, playerMarkTurn, gameActive, setGameActive, toggleModal, setIsDraw, alternateTurn, setAlternateTurn}) {
    const dispatch = useDispatch();
    const gameCells = useRef([]);
    const [gameGrid, setgameGrid] = useState([]);
    const [crossLeft, setCrossLeft] = useState([]);
    const [crossRight, setCrossRight] = useState([]);
    const [topRow, setTopRow] = useState([]);
    const [middleRow, setMiddleRow] = useState([]);
    const [bottomRow, setBottomRow] = useState([]);
    const [leftColumn, setLeftColumn] = useState([]);
    const [middleColumn, setMiddleColumn] = useState([]);
    const [rightColumn, setRightColumn] = useState([]);   

    const cpuThinkTimes=[4000, 5500, 7200, 9000, 11300, 13000];

    const randomNumber = length => Math.floor(Math.random() * length);
   
    useEffect(() => {  
        if(playerMark !== playerMarkTurn && gameActive){        
            setTimeout(() => {              
                computerTurn(); 
            }, cpuThinkTimes[randomNumber(cpuThinkTimes.length)]); 
        }        
    }, [playerMark, playerMarkTurn, alternateTurn, gameActive]);

    useEffect(() => {
        setgameGrid(gameCells);
        setCrossLeft([gameCells.current[0], gameCells.current[4], gameCells.current[8]]);
        setCrossRight([gameCells.current[2], gameCells.current[4], gameCells.current[6]]);
        setTopRow([gameCells.current[0], gameCells.current[1], gameCells.current[2]]);
        setMiddleRow([gameCells.current[3], gameCells.current[4], gameCells.current[5]]);
        setBottomRow([gameCells.current[6], gameCells.current[7], gameCells.current[8]]);
        setLeftColumn([gameCells.current[0], gameCells.current[3], gameCells.current[6]]);
        setMiddleColumn([gameCells.current[1], gameCells.current[4], gameCells.current[7]]);
        setRightColumn([gameCells.current[2], gameCells.current[5], gameCells.current[8]]);
    }, [gameCells]);         

    const checkMarks = () => {     
        if(topRow[0]?.classList.contains(`${playerMarkTurn}`) && topRow[1]?.classList.contains(`${playerMarkTurn}`) && topRow[2]?.classList.contains(`${playerMarkTurn}`)){
            topRow.forEach(box => box.classList.add("match-3"));
            setGameActive(false);  
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);            
        }
        else if(middleRow[0]?.classList.contains(`${playerMarkTurn}`) && middleRow[1]?.classList.contains(`${playerMarkTurn}`) && middleRow[2]?.classList.contains(`${playerMarkTurn}`)){
            middleRow.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);          
        }
        else if(bottomRow[0]?.classList.contains(`${playerMarkTurn}`) && bottomRow[1]?.classList.contains(`${playerMarkTurn}`) && bottomRow[2]?.classList.contains(`${playerMarkTurn}`)){
            bottomRow.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);          
        }
        else if(leftColumn[0]?.classList.contains(`${playerMarkTurn}`) && leftColumn[1]?.classList.contains(`${playerMarkTurn}`) && leftColumn[2]?.classList.contains(`${playerMarkTurn}`)){
            leftColumn.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);     
        }
        else if(middleColumn[0]?.classList.contains(`${playerMarkTurn}`) && middleColumn[1]?.classList.contains(`${playerMarkTurn}`) && middleColumn[2]?.classList.contains(`${playerMarkTurn}`)){
            middleColumn.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);          
        }
        else if(rightColumn[0]?.classList.contains(`${playerMarkTurn}`) && rightColumn[1]?.classList.contains(`${playerMarkTurn}`) && rightColumn[2]?.classList.contains(`${playerMarkTurn}`)){
            rightColumn.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);          
        }
        else if(crossLeft[0]?.classList.contains(`${playerMarkTurn}`) && crossLeft[1]?.classList.contains(`${playerMarkTurn}`) && crossLeft[2]?.classList.contains(`${playerMarkTurn}`)){
            crossLeft.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);          
        }
        else if(crossRight[0]?.classList.contains(`${playerMarkTurn}`) && crossRight[1]?.classList.contains(`${playerMarkTurn}`) && crossRight[2]?.classList.contains(`${playerMarkTurn}`)){
            crossRight.forEach(box => box.classList.add("match-3"));
            setGameActive(false);
            setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
            playerMark !== playerMarkTurn ? dispatch(opponentScore(1)) : dispatch(playerScore(1));
            setTimeout(() => toggleModal(), 1800);          
        }else{          
            const emptyGrids = document.querySelectorAll(".game-board__cell.empty"); 
            if(emptyGrids.length === 0){
                setTimeout(() => toggleModal(), 1800);
                setIsDraw(true);
                setGameActive(false);
                setAlternateTurn(alternateTurn === "x" ? "o" : "x");  
                dispatch(tieScore(1))
                setTimeout(() => setIsDraw(false), 1800); //shows next round in modal
            }else{                
                dispatch(playerTurn(playerMarkTurn === "x" ? "o" : "x")); //change playerMarkTurn, triggers useEffect again      
            }                     
        }
    }

    const computerTurn = () => {  
        const freeSpaces = document.querySelectorAll(".game-board__cell.empty");
        const cpuChoice = randomNumber(freeSpaces.length);

        if(freeSpaces.length !== 0){           
            freeSpaces[cpuChoice].classList.remove("empty");
            freeSpaces[cpuChoice].classList.add("active", `${playerMarkTurn}`);
            checkMarks();            
        }
    } 

    const selectBox = e => {
        e.classList.remove("empty");
        e.classList.add("active", `${playerMarkTurn}`);
        checkMarks();
    }
    
    return (
        <div className={`game-board ${playerMark !== playerMarkTurn ? "locked" : ""} ${gameActive ? "" : "game-inactive"}`}>
            {[...Array(9)].map((e, i) => {               
                return <div ref={el => gameCells.current[i] = el} key={i} className="game-board__cell empty" onClick={e => selectBox(e.target)} onMouseEnter={e => e.target.classList.add(`preview-${playerMark}`)} onMouseLeave={e => e.target.classList.remove(`preview-${playerMark}`)}></div>
            })}       
        </div>
    )
}

export default GameBoard;
