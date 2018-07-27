import React from 'react';
import Cell from './cell';

export default function Row(props){

  return(
  <div className='row'>
    <Cell rowNum={props.rowNum} columnNum={1} placeToken={props.placeToken} currentVals={props.currentVals}/>
    <Cell rowNum={props.rowNum} columnNum={2} placeToken={props.placeToken} currentVals={props.currentVals}/>
    <Cell rowNum={props.rowNum} columnNum={3} placeToken={props.placeToken} currentVals={props.currentVals}/>
  </div>
  )
};