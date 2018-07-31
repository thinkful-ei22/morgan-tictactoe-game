import React from 'react';
import {connect} from 'react-redux';

import Row from './row';
import Message from './message';

const Board = function(props){
  
    return(
      <div className='board-container'>
        <Row rowNum={1} currentVals={props.currentVals}/>
        <Row rowNum={2} currentVals={props.currentVals}/>
        <Row rowNum={3} currentVals={props.currentVals}/>
        <Message xIsNext={props.xIsNext} winner={props.winner}  turnCount={props.turnCount} />
      </div>
    )
};

const mapStoreToProps = (state) => {
  return {
    xIsNext: state.xIsNext,
    currentVals: state.currentVals,
    winner: state.winner,
    turnCount: state.turnCount
  }
}

export default connect(mapStoreToProps)(Board);
