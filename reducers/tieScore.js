
//TRY NOT TO NAME THS FUNCTION THE SAME AS ITS MATCHING ACTION (TIEScore)
const tiesScore = (state = 0, action) => { //default state is "0"
    switch(action.type){ 
      case "TIE_SCORE": return state += action.payload //match "TIE_SCORE" up to its action, and use payload (if action sends one)
      case "TIE_SCORE_RESET": return state = 0; 
      default: return state;
  }
}

export default tiesScore;