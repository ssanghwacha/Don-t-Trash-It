import React from 'react';
import './Game.css';
import bg from '../assets/main-bg.png';

const MainPage = () => {
    return (
        <div className="main-container">
            <img src={bg} alt="Background" className="background-image" />
        </div>
    );
};

export default MainPage;
