import x from "../images/icons/icon-x.svg";
import xGrey from "../images/icons/icon-x-grey.svg";
import o from "../images/icons/icon-o.svg";
import oGrey from "../images/icons/icon-o-grey.svg";
import { Button, Buttons } from "./Button";
import "../styles/GameHeader.scss";

function GameHeader({playerMarkTurn, modal, toggleModal, setReset}) {

    const reset = () => {
        setReset(true); //show reset buttons in modal
        toggleModal(!modal);
    }

    return (
        <div className="game-header">
            <div className="game-header__logo">                
                <img src={x} alt="x mark" />
                <img src={o} alt="o mark" />
            </div>
            <div className="game-header__turn">
                <img src={playerMarkTurn === "x" ? xGrey : oGrey} alt={`${playerMarkTurn} mark`} />                
                <label>TURN</label>
            </div>
            <p onClick={() => reset()}><Button color={Buttons.grey} size={Buttons.icon}/></p>
        </div>
    )
}


export default GameHeader;
