import React from 'react';
import './ThrowEnding.css';
import sadTreeImg from '../assets/images/sadtree.png';
import bgImage from '../assets/images/main-bg.png';

const ThrowEnding = () => {
  return (
    <div
      className="ending-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={sadTreeImg} alt="sad tree" className="ending-tree" />
      <h1>💀 You threw the trash...</h1>
      <p>The forest is sad. Game Over.</p>
    </div>
  );
};

export default ThrowEnding;
