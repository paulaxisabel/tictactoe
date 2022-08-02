
//TRY NOT TO NAME THS FUNCTION THE SAME AS ITS MATCHING ACTION (player)
const playerMark = (state = "o", action) => { //default state is "o"
    switch(action.type){ 
      case "PLAYER": return state = action.payload //match "PLAYER" up to its action, and use payload (if action sends one)
      default: return state;
  }
}

export default playerMark;