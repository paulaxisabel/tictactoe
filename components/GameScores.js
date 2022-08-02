import { useSelector } from "react-redux";
import "../styles/GameScores.scss";

function GameScores({playerMark}) {
    const playerScore = useSelector(state => state.playersScore);
    const opponentScore = useSelector(state => state.opponentsScore);
    const tieScore = useSelector(state => state.tiesScore);

    return (
        <div className="game-scores">
            <div className={`game-scores__score ${playerMark === "o" ? "opponent" : "you"}`}>
                <label>{playerMark} (YOU)</label>
                <b>{playerScore}</b>
            </div>
            <div className="game-scores__score ties">
                <label>TIES</label>
                <b>{tieScore}</b>
            </div>
            <div className={`game-scores__score ${playerMark === "o" ? "you" : "opponent"}`}>
                <label>{playerMark === "x" ? "o" : "x"} (CPU)</label>
                <b>{opponentScore}</b>
            </div>
        </div>
    )
}

export default GameScores;