

//these actions will be sent to reducer when used in a dispatch()
export const player = mark => {
  return {
    type: "PLAYER", //finds match to its reducer (check src/reducers/playerMark)
    payload: mark //optional, send a payload to reducer
  }
}

export const playerTurn = mark => {
  return {
    type: "PLAYER_TURN", //finds match to its reducer (check src/reducers/playerMarkTurn)
    payload: mark //optional, send a payload to reducer
  }
}

export const playerScore = score => {
  return {
    type: "PLAYER_SCORE", //finds match to its reducer 
    payload: score //optional, send a payload to reducer
  }
}

export const opponentScore = score => {
  return {
    type: "OPPONENT_SCORE", //finds match to its reducer 
    payload: score //optional, send a payload to reducer
  }
}

export const tieScore = score => {
  return {
    type: "TIE_SCORE", //finds match to its reducer 
    payload: score //optional, send a payload to reducer
  }
}

export const playerScoreReset = score => {
  return {
    type: "PLAYER_SCORE_RESET", //finds match to its reducer 
    payload: score //optional, send a payload to reducer
  }
}

export const opponentScoreReset = score => {
  return {
    type: "OPPONENT_SCORE_RESET", //finds match to its reducer
    payload: score //optional, send a payload to reducer
  }
}

export const tieScoreReset = score => {
  return {
    type: "TIE_SCORE_RESET", //finds match to its reducer
    payload: score //optional, send a payload to reducer
  }
}
