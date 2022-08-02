import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";  
import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameScores from "./GameScores";
import Modal from "./Modal";
import loading from "../images/loading.gif";
import "../styles/pages/GameScene.scss";

function GameScene() {
    const playerMark = useSelector(state => state.playerMark);
    const playerMarkTurn = useSelector(state => state.playerMarkTurn);
    const [alternateTurn, setAlternateTurn] = useState("x");   
    const [isDraw, setIsDraw] = useState(false);   
    const [gameActive, setGameActive] = useState(true);
    const [modal, setModal] = useState(false);
    const [reset, setReset] = useState(false);

    const toggleModal = () => setModal(!modal);

    const pageMotion = {
        initial: {opacity: 0, y: 5},
        animate: {opacity: 1, y: 0, transition: {duration: .4}},
        exit: {opacity: 0, y: 5, transition: {duration: .23}}
    };

    return (
        <motion.div className="game-scene" initial="initial" animate="animate" exit="exit" variants={pageMotion}>  
            <GameHeader playerMarkTurn={playerMarkTurn} modal={modal} toggleModal={toggleModal} setReset={setReset}/>
            <GameBoard playerMark={playerMark} playerMarkTurn={playerMarkTurn} gameActive={gameActive} setGameActive={setGameActive} toggleModal={toggleModal} setIsDraw={setIsDraw} alternateTurn={alternateTurn} setAlternateTurn={setAlternateTurn}/>
            <GameScores playerMark={playerMark}/>
            <p className={`opponent-message ${playerMark !== playerMarkTurn && gameActive ? "active" : ""}`}>Your opponent is thinking <img src={loading} alt="opponent is thinking" /></p>          
            <Modal playerMark={playerMark} playerMarkTurn={playerMarkTurn} modal={modal} toggleModal={toggleModal} isDraw={isDraw} reset={reset} setReset={setReset} setGameActive={setGameActive} alternateTurn={alternateTurn}/>          
        </motion.div>
    )
}

export default GameScene;
