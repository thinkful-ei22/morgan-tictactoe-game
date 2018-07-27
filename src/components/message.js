import React from 'react';

export default function Message(props){
  let message;
  let button;

  if(props.winner){
    message = `Player-${props.winner} is the winner!!!!!`;
    button = <button onClick={() => props.resetGame()}>Rematch</button>
  } else if (props.xIsNext){
    message = 'Player-X goes next';
  } else {
    message = 'Player-O goes next';
  }

  return(
    <div>
      <h2>{message}</h2>
      {button}
    </div>
  )
}