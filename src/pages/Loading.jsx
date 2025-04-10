import React from 'react';
import './Loading.css';
import trashImg from '../assets/images/titletrash.png';
import loadingBg from '../assets/images/loading-bg.png';

const Loading = () => {
    return (
        <div
            className="loading-screen"
            style={{ backgroundImage: `url(${loadingBg})` }}
        >
            <img src={trashImg} alt="trash" className="trash" />

            <p className="loading-text">
                loading<span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
            </p>
        </div>
    );
};

export default Loading;
