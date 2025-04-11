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
    const [isPicked, setIsPicked] = useState(false);
    const [hearts, setHearts] = useState(3);
    const navigate = useNavigate();

    const handleThrow = () => {
        if (hearts > 1) {
            setHearts((prev) => prev - 1);
            setIsThrown(true);
            setTimeout(() => {
                setIsThrown(false);
            }, 1200);
        } else {
            // 하트가 1개 남았을 때 THROW → bad ending
            setIsThrown(true);
            setTimeout(() => {
                navigate('/throw-ending');
            }, 1200);
        }
    };

    const handlePick = () => {
        if (hearts < 5) {
            setHearts((prev) => prev + 1);
            setIsPicked(true);
            setTimeout(() => {
                setIsPicked(false);
            }, 1000);
        } else {
            // 하트가 5개일 때 PICK → good ending
            setIsPicked(true);
            setTimeout(() => {
                navigate('/pick-ending');
            }, 1000);
        }
    };

    return (
        <div
            className="game-screen"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="hearts">
                {[...Array(hearts)].map((_, i) => (
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
                className={`trash ${isThrown ? 'throw' : ''} ${
                    isPicked ? 'pick' : ''
                }`}
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
