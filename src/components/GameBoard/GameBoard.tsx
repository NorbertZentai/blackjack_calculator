import React from "react";
import tableImage from "../../assets/images/BJ_table.png";
import "./GameBoard.scss";
import "./GameBoardResponsive.scss";
import InterpolatedText from "../InterpolatedText";

const GameBoard: React.FC = () => {
  return (
    <div className="game-board">
      <div className="title">🃏 <InterpolatedText template="{{ APP.TITLE }}" /></div>
      <div className="table-container">
        <img src={tableImage} alt="Blackjack table" />
      </div>
    </div>
  );
};

export default GameBoard;