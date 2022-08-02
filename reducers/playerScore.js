
//TRY NOT TO NAME THS FUNCTION THE SAME AS ITS MATCHING ACTION (playerScore)
const playersScore = (state = 0, action) => { //default state is "0"
    switch(action.type){ 
      case "PLAYER_SCORE": return state += action.payload; //match "PLAYER_SCORE" up to its action, and use payload (if action sends one)
      case "PLAYER_SCORE_RESET": return state = 0; 
      default: return state;
  }
}

export default playersScore;