import React, { useState } from 'react';
import './Game.css';
import trashImg from '../assets/images/titletrash.png';
import treeImg from '../assets/images/sadtree.png';
import bgImage from '../assets/images/main-bg.png';
import heartImg from '../assets/images/heart.png';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [isThrown, setIsThrown] = useState(false);
  const navigate = useNavigate();

  const handleThrow = () => {
    setIsThrown(true); // 1. 애니메이션 트리거
    setTimeout(() => {
      navigate('/throw-ending'); // 2. 애니메이션 후 이동
    }, 1000); // 1초 후 이동
  };

  const handlePick = () => {
    navigate('/pick-ending');
  };

  return (
    <div
      className="game-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hearts">
        {[1, 2, 3].map((i) => (
          <img key={i} src={heartImg} alt="heart" className="heart" />
        ))}
      </div>
      <div className="trees">
        <img src={treeImg} alt="tree" />
        <img
          src={trashImg}
          alt="trash"
          className={`trash ${isThrown ? 'throw-animation' : ''}`}
        />
        <img src={treeImg} alt="tree" />
      </div>
      <div className="buttons">
        <button className="throw-btn" onClick={handleThrow}>THROW</button>
        <button className="pick-btn" onClick={handlePick}>PICK</button>
      </div>
    </div>
  );
};

export default Game;
