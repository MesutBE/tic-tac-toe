import React from "react";
import Square from "./Square";
import { calculateWinner } from "./utils";

export default class Board extends React.Component {
    state = {
        squares: new Array(9).fill(null),
        turn: "X"
    };

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => {
                    const newSquares = this.props.squares[i].slice();

                    if (newSquares[i] !== null) {
                        return;
                    }

                    const winner = calculateWinner(this.props.squares[i]);
                    if (winner) {
                        return;
                    }

                    newSquares[i] = this.state.turn;

                    let newTurn = null;
                    if (this.state.turn === "X") {
                        newTurn = "O";
                    }
                    if (this.state.turn === "O") {
                        newTurn = "X";
                    }

                    this.setState({
                        squares: newSquares,
                        turn: newTurn
                    });
                }}
            />
        );
    }

    render() {
        const status = "Next player: " + this.state.turn;

        let message = "";
        const winner = calculateWinner(this.state.squares);
        if (winner) {
            message = "Winner winner chicken dinner the winner is " + winner;
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div>{message}</div>
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
