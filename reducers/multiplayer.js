
//TRY NOT TO NAME THS FUNCTION THE SAME AS ITS MATCHING ACTION (setMultiplayer)
const multiplayer = (state = false, action) => { //default state is false
    switch(action.type){ 
      case "MULTIPLAYER": return state = action.payload //match "MULTIPLAYER" up to its action, and use payload (if action sends one)
      default: return state;
  }
}

export default multiplayer;