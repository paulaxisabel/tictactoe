import playerMark from "./playerMark";
import playerMarkTurn from "./playerMarkTurn";
import playersScore from "./playerScore";
import opponentsScore from "./opponentScore";
import tiesScore from "./tieScore";
import {combineReducers} from "redux";

//import and combine all our reducers
const allReducers = combineReducers({ 
    playerMark, playerMarkTurn, playersScore, opponentsScore, tiesScore
});

export default allReducers;