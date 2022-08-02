import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { player } from "../actions"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  
import { Button, Buttons } from "../components/Button";
import ModalSearching from "./ModalSearching";
import x from "../images/icons/icon-x.svg";
import o from "../images/icons/icon-o.svg";
import "../styles/pages/GameMenu.scss";

function GameMenu() {
    const playerMark = useSelector(state => state.playerMark);
    const dispatch = useDispatch(); 
    let navigate = useNavigate();    
    let [gameLoading, setGameLoading] = useState(false);
    const [modalSearch, setModalSearch] = useState(false);

    const playerMarks = {x: "x", o: "o"};
    const searchTimes=[8000, 11000, 15000, 18000, 21000, 24000];  
    const randomNumber = length => Math.floor(Math.random() * length);
    const loadGame = () => {setModalSearch(true); setGameLoading(setTimeout(() => {setModalSearch(false); navigate("/multiplayer");}, searchTimes[randomNumber(searchTimes.length)])); }     

    const pageMotion = {
        initial: {opacity: 0, y: 5},
        animate: {opacity: 1, y: 0, transition: {duration: .35}},
        exit: {opacity: 0, y: 5, transition: {duration: .4, delay: .3}}
    };

    return (
        <motion.div className="game-menu" initial="initial" animate="animate" exit="exit" variants={pageMotion}> 
            <div className="game-menu__header">
                <img src={x} alt="x mark" />
                <img src={o} alt="o mark" />
            </div>
            <div className="game-menu__marks">
                <h1>PICK PLAYER 1’S MARK</h1>
                <div className={`mark-choices ${playerMark === playerMarks.x ? playerMarks.x : playerMarks.o}`}>       
                    <div className="mark-choices__choice x" onClick={() => dispatch(player(playerMarks.x))}>
                        <svg viewBox="0 0 64 64"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" /></svg> 
                    </div> 
                    <div className="mark-choices__choice o" onClick={() => dispatch(player(playerMarks.o))}>
                        <svg viewBox="0 0 64 64"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"/></svg>
                    </div>         
                </div>
                <label>REMEMBER : X GOES FIRST</label>
            </div>

            <div className="game-menu__cta">
                <Link to="/game-board"><Button text="NEW GAME (VS CPU)" color={Buttons.orange} size={Buttons.large}/></Link>
                <p onClick={() => loadGame()}><Button text={`NEW GAME\u00A0\u00A0(VS PLAYER)`} color={Buttons.green} size={Buttons.large} /></p>          
            </div>

            <ModalSearching modalSearch={modalSearch} setModalSearch={setModalSearch} gameLoading={gameLoading}/>          
        </motion.div>
    )
}

export default GameMenu;
