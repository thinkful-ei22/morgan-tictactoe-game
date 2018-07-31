import React from 'react';
import {connect} from 'react-redux';

import {clickHandler} from '../actions/index';

function Cell(props) {
  return(
    <span className='cell' onClick={ () => props.dispatch(clickHandler(props.rowNum, props.columnNum))} >
      {props.currentVals[props.rowNum - 1][props.columnNum - 1]}
    </span>
  )
}; 


export default connect()(Cell);