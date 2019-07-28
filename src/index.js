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
            yIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        //Find which square the piece lands in
        squares[calculatePosition(i, squares)] = this.state.yIsNext ? 'Red':'Yellow';
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
                // value={this.state.squares[i]}
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
                <div className="container_row">
                    <div className="fullboard">
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
                    
                    {/* <div className="fullcounters">
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
                    <div></div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

//Calculate where the piece will be placed
function calculatePosition(val, squares) {
    //Iterate through top row (where pieces are dropped)
    for (let i = 0; i < 7; i++) {
        //Find which column of top row
        if (i === val) {
            let n = val;
            //Move down given column looking for any pieces
            for (let j = 0; j < 5; j++) {
                n = n + 7;
                //Find a piece and return position above as location for new piece
                if (squares[n] != null) {
                    return n-7;
                } 
            }
            return n;
        }
    }
}

function calculateWinner(squares) {
    
    //Horizontal
    for (let i=0; i<36; i=i+7) {
        //The groups of 4 along each row
        for (let j=0; j<5; j++) {
            let n = i+j;
            //Group 4 on each row
            const [a, b, c, d] = [n, n+1, n+2, n+3];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
                return squares[a];
            }
        }
    }

    //Vertical
    for (let i=0; i<7; i++) {
        for (let j=0; j<4; j++){
            let n = i + j;
            const [a, b, c, d] = [n, n+7, n+14, n+21];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
                return squares[a];
            }
        }
    }

    //Diagonal
    const lines = [
        [14,22,30,38],
        [7,15,23,31],
        [15,23,31,39],
        [0,8,16,24],
        [8,16,24,32],
        [16,24,32,40],
        [1,9,17,25],
        [9,17,24,33],
        [17,25,33,41],
        [2,10,18,26],
        [10,18,26,34],
        [3,11,19,27],
        [21,15,9,3],
        [28,22,16,10],
        [22,16,10,4],
        [35,29,23,17],
        [29,23,17,11],
        [23,17,11,5],
        [36,30,24,18],
        [30,24,18,12],
        [24,18,12,6],
        [37,31,25,19],
        [31,25,19,13],
        [38,32,26,20],
    ]

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
  