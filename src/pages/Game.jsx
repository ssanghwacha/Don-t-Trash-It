import React from 'react';
import './Game.css';
import bg from '../assets/main-bg.png';

const Game = ({ onThrow, onPick }) => {
    return (
        <div className="game-container">
            <img src={bg} alt="background" className="game-bg" />
            {/* 여기에 나중에 버튼이나 트리 등을 추가하면 돼 */}
        </div>
    );
};

export default Game;
