
//TRY NOT TO NAME THS FUNCTION THE SAME AS ITS MATCHING ACTION (player_turn)
const playerMarkTurn = (state = "x", action) => { 
    switch(action.type){ 
      case "PLAYER_TURN": return state = action.payload //match "PLAYER" up to its action, and use payload (if action sends one)
      default: return state;
  }
}

export default playerMarkTurn;