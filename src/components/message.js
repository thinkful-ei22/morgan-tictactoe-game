import React from 'react';
import {connect} from 'react-redux';
import {resetGame} from '../actions/index';

function Message(props){
  let message;
  let button;

  if(props.winner){
    message = `Player-${props.winner} is the winner!!!!!`;
    button = <button onClick={() => props.dispatch(resetGame())}>Rematch</button>
  } else if (props.xIsNext && props.turnCount < 10){
    message = 'Player-X goes next';
  } else if (!props.xIsNext && props.turnCount < 10){
    message = 'Player-O goes next';
  } else {
    message = 'Draw! You both lose!';
    button = <button onClick={() => props.dispatch(resetGame())}>Rematch</button>
  }

  return(
    <div>
      <h2>{message}</h2>
      {button}
    </div>
  )
}

export default connect()(Message);
