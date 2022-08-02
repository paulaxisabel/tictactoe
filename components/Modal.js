
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { opponentScoreReset, playerScoreReset, tieScoreReset, playerTurn} from "../actions"; 
import { Button, Buttons } from "./Button";
import x from "../images/icons/icon-x.svg";
import o from "../images/icons/icon-o.svg";
import "../styles/Modal.scss";

function Modal({playerMark, playerMarkTurn, modal, toggleModal, isDraw, reset, setReset, setGameActive, alternateTurn}) {
    let navigate = useNavigate();
    const dispatch = useDispatch();  
    
    const quitGame = () => {
        toggleModal(!modal);
        resetScores();
        setTimeout(() => navigate("/"), 600);        
    }

    const resetScores = () => {
        dispatch(playerScoreReset());
        dispatch(opponentScoreReset());
        dispatch(tieScoreReset());
    }

    const resetRound = () => {
        nextRound();       
        resetScores(); //and reset scores? 
        setTimeout(() => setReset(false), 800);
    }   

    const nextRound = () => {        
        setTimeout(() => toggleModal(!modal), 150);  
        setTimeout(() => {dispatch(playerTurn(alternateTurn)); setGameActive(true);}, 500); //change playerTurnMark to opposite (alternate turn is set by matching 3)
       
        //clear board
        const gameCells = document.querySelectorAll(".game-board__cell"); 
        gameCells.forEach(cell => {
            cell.classList.add("empty");
            cell.classList.remove("x", "o", "active", "match-3");
        });
    }

    return (
        <div className={`modal ${modal ? "active" : ""}`} onClick={() => toggleModal(!modal)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {!reset ? 
                    <>
                    {!isDraw && <p>{playerMark === playerMarkTurn ? "YOU WON!" : "OH NO, YOU LOST..."}</p>}
                    {isDraw ? <h3>ROUND TIED</h3> : <h3 className={`${playerMarkTurn === "x" ? "x" : "o"}`}><img src={playerMarkTurn === "x" ? x : o} alt={playerMarkTurn}/>TAKES THE ROUND</h3>}
                    <div className="modal__cta">
                        <i onClick={() => quitGame()}><Button text="QUIT" color={Buttons.grey} size={Buttons.medium}/></i>                    
                        <i onClick={() => nextRound()}><Button text="NEXT ROUND" color={Buttons.orange} size={Buttons.medium}/></i>                    
                    </div>
                    </>
                    : 
                    <>
                    <h3>RESTART GAME</h3>
                    <div className="modal__cta">
                        <i onClick={() => {toggleModal(); setTimeout(() => setReset(false), 400);}}><Button text="NO, CANCEL" color={Buttons.grey} size={Buttons.medium}/></i>                    
                        <i onClick={() => resetRound()}><Button text="YES, RESTART" color={Buttons.orange} size={Buttons.medium}/></i>                    
                    </div>
                    </>
                }
           </div>
        </div>
    )
}
export default Modal;