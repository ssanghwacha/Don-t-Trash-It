import React, { useState } from 'react';
import './Game.css';
import trashImg from '../assets/images/trash.png';
import sadTreeImg from '../assets/images/sadtree.png';
import happyTreeImg from '../assets/images/happytree.png';
import bgImage from '../assets/images/main-bg.png';
import heartImg from '../assets/images/heart.png';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [isThrown, setIsThrown] = useState(false);
  const navigate = useNavigate();

  const handleThrow = () => {
    setIsThrown(true);
    setTimeout(() => {
      navigate('/throw-ending');
    }, 1200);
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

      <div className="tree-container">
        <img
          src={isThrown ? sadTreeImg : happyTreeImg}
          alt="left-tree"
          className="tree left"
        />
        <img
          src={happyTreeImg}
          alt="right-tree"
          className="tree right"
        />
      </div>

      <img
        src={trashImg}
        alt="trash"
        className={`trash ${isThrown ? 'throw' : ''}`}
      />

      <div className="buttons">
        <button className="throw-btn" onClick={handleThrow}>
          THROW
        </button>
        <button className="pick-btn" onClick={handlePick}>
          PICK
        </button>
      </div>
    </div>
  );
};

export default Game;
