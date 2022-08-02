
//TRY NOT TO NAME THIS FUNCTION THE SAME AS ITS MATCHING ACTION (opponentScore)
const opponentsScore = (state = 0, action) => { //default state is "0"
    switch(action.type){ 
      case "OPPONENT_SCORE": return state += action.payload //match "OPPONENT_SCORE" up to its action, and use payload (if action sends one)
      case "OPPONENT_SCORE_RESET": return state = 0; 
      default: return state;
  }
}

export default  opponentsScore;