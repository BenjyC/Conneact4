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

function Circle(props) {

    return (
        <button className="circle">
            {props.value}
        </button>
    );

}
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(42).fill(null),
            //circles: Array(16).fill(null),
            yIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        
        squares[i] = this.state.yIsNext ? 'Red':'Yellow';
        this.setState({
            squares: squares,
            yIsNext: !this.state.yIsNext,
        });
    }

    renderCircle(i) {
        return (
            <Circle
                // value={this.state.circles[i]}
                // onClick={() => this.handleClick(i)}
            />
        );
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
        const winner = calculateWinner(this.state.squares);
        let status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.yIsNext ? 'Red':'Yellow');
        }


        return (
            <div>
                <div className="status">{status}</div>
                <div class="container_row">
                    <div class="fullboard">
                        <div className="board-row">
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                            {this.renderSquare(6)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                            {this.renderSquare(9)}
                            {this.renderSquare(10)}
                            {this.renderSquare(11)}
                            {this.renderSquare(12)}
                            {this.renderSquare(13)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(14)}
                            {this.renderSquare(15)}
                            {this.renderSquare(16)}
                            {this.renderSquare(17)}
                            {this.renderSquare(18)}
                            {this.renderSquare(19)}
                            {this.renderSquare(20)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(21)}
                            {this.renderSquare(22)}
                            {this.renderSquare(23)}
                            {this.renderSquare(24)}
                            {this.renderSquare(25)}
                            {this.renderSquare(26)}
                            {this.renderSquare(27)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(28)}
                            {this.renderSquare(29)}
                            {this.renderSquare(30)}
                            {this.renderSquare(31)}
                            {this.renderSquare(32)}
                            {this.renderSquare(33)}
                            {this.renderSquare(34)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(35)}
                            {this.renderSquare(36)}
                            {this.renderSquare(37)}
                            {this.renderSquare(38)}
                            {this.renderSquare(39)}
                            {this.renderSquare(40)}
                            {this.renderSquare(41)}
                        </div>
                    </div>
                    
                    {/* <div class="fullcounters">
                        <div className="counter-row">
                            {this.renderCircle(0)}
                            {this.renderCircle(1)}
                            {this.renderCircle(2)}
                            {this.renderCircle(3)}
                        </div>
                        <div className="counter-row">
                            {this.renderCircle(4)}
                            {this.renderCircle(5)}
                            {this.renderCircle(6)}
                            {this.renderCircle(7)}
                        </div>
                        <div className="counter-row">
                            {this.renderCircle(8)}
                            {this.renderCircle(9)}
                            {this.renderCircle(10)}
                            {this.renderCircle(11)}
                        </div>
                        <div className="counter-row">
                            {this.renderCircle(12)}
                            {this.renderCircle(13)}
                            {this.renderCircle(14)}
                            {this.renderCircle(15)}
                        </div>
                    </div> */}
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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2, 3],
        [3, 4, 5, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
            return squares[a];
        }
    }
    return null;
}
  
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  