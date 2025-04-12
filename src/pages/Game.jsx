import React, { useState } from 'react';
import './Game.css';
import trashImg from '../assets/images/trash.png';
import heartImg from '../assets/images/heart.png';
import neutralTree from '../assets/images/neutraltree.png';
import sadTree from '../assets/images/sadtree.png';
import happyTree from '../assets/images/happytree.png';
import trashcan from '../assets/images/trashcan.png';
import background from '../assets/images/background.png';

const Game = () => {
    const [isThrown, setIsThrown] = useState(false);
    const [isPicked, setIsPicked] = useState(false);
    const [hearts, setHearts] = useState(3);
    const [treeState, setTreeState] = useState('neutral');
    const [isGameOver, setIsGameOver] = useState(false);
    const [isVictory, setIsVictory] = useState(false);

    const handleThrow = () => {
        if (hearts > 1) {
            setHearts((prev) => prev - 1);
            setTreeState('sad');
            setIsThrown(true);
            setTimeout(() => {
                setIsThrown(false);
                setTreeState('neutral');
            }, 1000);
        } else {
            setHearts(0);
            setTreeState('fall');
            setIsThrown(true);
            setTimeout(() => {
                setIsThrown(false);
                setIsGameOver(true);
            }, 1000);
        }
    };

    const handlePick = () => {
        if (hearts < 5) {
            const newHearts = hearts + 1;
            setHearts(newHearts);
            setTreeState('happy');
            setIsPicked(true);
            setTimeout(() => {
                setIsPicked(false);
                setTreeState('neutral');
            }, 1000);

            if (newHearts === 5) {
                setTimeout(() => {
                    setIsVictory(true);
                }, 1200);
            }
        }
    };

    const handleRestart = () => {
        window.location.reload();
    };

    const renderTreeImage = () => {
        if (treeState === 'sad') return sadTree;
        if (treeState === 'happy') return happyTree;
        return neutralTree;
    };

    return (
        <div
            className="game-screen"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hearts">
                {[...Array(hearts)].map((_, i) => (
                    <img key={i} src={heartImg} alt="heart" className="heart" />
                ))}
            </div>

            <div className="tree-wrapper">
                <img
                    src={renderTreeImage()}
                    alt="left-tree"
                    className={`tree-overlay ${
                        treeState === 'fall' ? 'fall-left' : ''
                    }`}
                />
                <img
                    src={renderTreeImage()}
                    alt="right-tree"
                    className={`tree-overlay ${
                        treeState === 'fall' ? 'fall-left' : ''
                    }`}
                />
            </div>

            {isPicked && (
                <img src={trashcan} alt="trashcan" className="trashcan" />
            )}
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

            {isGameOver && (
                <div className="overlay">
                    <div className="gameover-box">
                        <h1>GAME OVER</h1>
                        <h1>Do You Want To Make the Tree Happy Again?</h1>
                        <button onClick={handleRestart}>YES</button>
                    </div>
                </div>
            )}

            {isVictory && (
                <div className="overlay victory">
                    <div className="gameover-box">
                        <h1>You Saved the Tree! 🌳💚</h1>
                        <button onClick={handleRestart}>Play Again</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;
