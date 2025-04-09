import React from 'react'
import './Title.css'
import bgImage from '../assets/images/title-bg.png' // background image
import trashImage from '../assets/images/titletrash.png' // trash in spotlight

const Title = ({ onYes, onNo }) => {
  return (
    <div
      className="title-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1 className="game-title">DON’T<br />TRASH IT!</h1>

      <div className="spotlight">
        <img src={trashImage} alt="trash" className="trash" />
      </div>

      <div className="start-box">
        <p>DO YOU WANT TO START GAME?</p>
        <div className="buttons">
          <button onClick={onYes}>YES</button>
          <button onClick={onNo}>NO</button>
        </div>
      </div>
    </div>
  )
}

export default Title
