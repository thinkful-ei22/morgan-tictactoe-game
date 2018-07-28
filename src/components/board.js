import React from 'react';
import Row from './row';
import Message from './message';

export default class Board extends React.Component{
  possibleWins = [
    [ [0,0], [0,1], [0,2] ],
    [ [1,0], [1,1], [1,2] ],
    [ [2,0], [2,1], [2,2] ],
    [ [0,0], [1,0], [2,0] ],
    [ [0,1], [1,1], [2,1] ],
    [ [0,2], [1,2], [2,2] ],
    [ [0,0], [1,1], [2,2] ],
    [ [2,0], [1,1], [0,2] ],
  ];
  

  constructor(){
    super();

    this.state = {
      xIsNext: true,
      currentVals: [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
      ],
      winner: '',
      turnCount: 1
    }
  };


  checkForWinner = (row1, col1, row2, col2, row3, col3, posArray) => {
    if ( posArray[row1][col1] !== '' 
        && posArray[row1][col1] === posArray[row2][col2] 
        && posArray[row1][col1] === posArray[row3][col3]
      ){
      console.log (`WINNER IS PLAYER-${posArray[row1][col1]}`);
      this.setState({winner: posArray[row1][col1]});
    }
  };


  placeToken = (row, col) => {
    let letter;

    if(this.state.xIsNext){
      letter = 'X';
    } else {
      letter = 'O';
    }

    if(this.state.currentVals[row - 1][col - 1] === '' && this.state.winner === '') {
      let updateVals = this.state.currentVals;

      updateVals[row - 1][col - 1] = letter;

      this.setState({
        xIsNext: !this.state.xIsNext,
        currentVals: updateVals,
        turnCount: this.state.turnCount + 1
      });

      for(let i = 0; i < this.possibleWins.length; i++){
        const array = this.possibleWins[i];
        this.checkForWinner(array[0][0], array[0][1], array[1][0], array[1][1], array[2][0], array[2][1], this.state.currentVals);
      }
    }
  };


  resetGame = () => {
    this.setState({
      xIsNext: true,
      currentVals: [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
      ],
      winner: '',
      turnCount: 1
    });
  }


  render(){
    return(
      <div className='board-container'>
        <Row rowNum={1} placeToken={this.placeToken} currentVals={this.state.currentVals}/>
        <Row rowNum={2} placeToken={this.placeToken} currentVals={this.state.currentVals}/>
        <Row rowNum={3} placeToken={this.placeToken} currentVals={this.state.currentVals}/>
        <Message xIsNext={this.state.xIsNext} winner={this.state.winner}  turnCount={this.state.turnCount} resetGame={this.resetGame}/>
      </div>
    )
  };

};