import React from 'react';

export default function Cell(props){

  return(
    <span className='cell' onClick={e => props.placeToken(props.rowNum, props.columnNum)}>
      {props.currentVals[props.rowNum - 1][props.columnNum - 1]}
    </span>
  )
};      
