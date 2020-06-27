import React from "react";
import "./style.css";
import Board from "./Board";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            history: [
                { 
                    squares: Array(9).fill(null), 
                }
            ], 
            turn: "X", 
        };
    }

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
