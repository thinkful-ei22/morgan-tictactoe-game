import React from 'react';
import Cell from './cell';

export default function Row(props){
    
  return(
  <div className='row'>
    <Cell rowNum={props.rowNum} columnNum={1} currentVals={props.currentVals}/>
    <Cell rowNum={props.rowNum} columnNum={2} currentVals={props.currentVals}/>
    <Cell rowNum={props.rowNum} columnNum={3} currentVals={props.currentVals}/>
  </div>
  )
};