const initialState = {
  xIsNext: true,
  currentVals: [
    ['', '', ''], 
    ['', '', ''], 
    ['', '', '']
  ],
  winner: '',
  turnCount: 1
}


export function boardReducer(state=initialState, action){

  if(action.type === 'CLICK_HANDLER'){

    if(state.currentVals[action.row - 1][action.col - 1] === '' && state.winner === ''){
      const letter = state.xIsNext ? 'X' : 'O';
      let newWinner = '';
      let updateVals = state.currentVals.map(rowComp => rowComp.map(cell => cell));

      if(state.winner === '') {
        updateVals[action.row - 1][action.col - 1] = letter;

        //iterates through each row; checks for winner horizontally
        updateVals.forEach(row => {
          if (row[0] === row[1] 
              && row[0] === row[2] 
              && row[0] !== ''){
            newWinner = row[0];
          }
        });

        //iterates through each column; checks for winner vertically
        for(let i = 0; i <= 2; i++){
          if(updateVals[0][i] === updateVals[1][i] 
              && updateVals[0][i] === updateVals[2][i] 
              && updateVals[0][i] !== ''){
            newWinner = updateVals[0][i];
          }
        }

        //checks for winner diagonally (only two possibilities)
        if( (updateVals[0][0] === updateVals[1][1] 
              && updateVals[0][0] === updateVals[2][2] 
              && updateVals[0][0] !== '')
          || (updateVals[2][0] === updateVals[1][1] 
              && updateVals[2][0] === updateVals[0][2] 
              && updateVals[1][1] !== '')
        ){
          newWinner = updateVals[1][1];
        }
      }

      return Object.assign({}, state, {
        currentVals: updateVals,
        xIsNext: !state.xIsNext,
        turnCount: state.turnCount++,
        winner: newWinner
      });
    } else {
      return state;
    }





  } else if(action.type === 'RESET_GAME'){
    return Object.assign({}, state, {
    xIsNext: true,
    currentVals: [
      ['', '', ''], 
      ['', '', ''], 
      ['', '', '']
    ],
    winner: '',
    turnCount: 1
  });



  } else {
    return state;
  }

}