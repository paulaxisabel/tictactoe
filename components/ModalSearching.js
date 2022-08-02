import { Button, Buttons } from "./Button";
import loading from "../images/loading.gif";
import "../styles/Modal.scss";

function ModalSearching({modalSearch, setModalSearch, gameLoading}) {
 
    return (
        <div className={`modal ${modalSearch ? "active" : ""}`} onClick={() => {gameLoading && clearTimeout(gameLoading); setModalSearch(false);}}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h3 className="searching">SEARCHING FOR OPPONENT<img src={loading} alt="searching for opponent" /></h3>
                <div className="modal__cta">
                    <i onClick={() => {gameLoading && clearTimeout(gameLoading); setModalSearch(false);}}><Button text="CANCEL" color={Buttons.grey} size={Buttons.medium}/></i>                      
                </div>
           </div>
        </div>
    )
}
export default ModalSearching;