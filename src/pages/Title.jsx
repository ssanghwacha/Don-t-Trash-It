import React from 'react';
import './Title.css';
import bgImage from '../assets/images/title-bg.png';

const Title = ({ onYes, onNo }) => {
    return (
        <div className="title-wrapper">
            <div
                className="bg"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="title-screen">
                <h1 className="game-title">
                    <span>DON’T</span>
                    <br />
                    <span>TRASH IT!</span>
                </h1>

                <div className="start-box">
                    <p>DO YOU WANT TO START GAME?</p>
                    <div className="buttons">
                        <button onClick={onYes}>YES</button>
                        <button onClick={onNo}>NO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;
