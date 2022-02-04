// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button 
        className="square" 
        onClick={() => this.props.onClick()}  // Calls the parent onClick function
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    
    handleClick(i) {  // Use on[Event] to define props that represent events and handle[Event] which handle them - purely nomenclature
        const squares = this.state.squares.slice();  // Create copy of array
        squares[i] = "X";
        this.setState({squares: squares});
    }
    
    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]} 
            // A component's state is private, so other components cannot directly update another's state
            // Pass a function from Board to Square and Square will call that function and change its state
            onClick={() => this.handleClick(i)}  // Need to define handleClick method 
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  