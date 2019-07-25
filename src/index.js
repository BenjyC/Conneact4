import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {

    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );

}
  
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(16).fill(null),
            yIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        squares[i] = this.state.yIsNext ? 'Red':'Yellow';
        this.setState({
            sqaures: squares,
            yIsNext: !this.state.yIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} 
            />
        );
    }   

    render() {
        const status = 'Next player: ' + (this.state.yIsNext ? 'Red':'Yellow');

        return (
            <div>
                <div className="status">{status}</div>
                
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
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
  