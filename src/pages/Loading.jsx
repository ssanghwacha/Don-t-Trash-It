import React from 'react'
import './Loading.css' // Don't forget to create this CSS file
import trashImg from '../assets/images/titletrash.png'
const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spotlight">
        <img src={trashImg} alt="trash" className="trash" />
      </div>
      <p className="loading-text">loading...</p>
    </div>
  )
}

export default Loading
