import React from 'react'
import './Loading.css'
import trashImg from '../assets/images/titletrash.png'
import loadingBg from '../assets/images/loading-bg.png'

const Loading = () => {
  return (
    <div className="loading-screen" style={{ backgroundImage: `url(${loadingBg})` }}>
      <div className="spotlight">
        <img src={trashImg} alt="trash" className="trash" />
      </div>
      <p className="loading-text">loading...</p>
    </div>
  )
}

export default Loading
