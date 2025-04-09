function Title({ onYes }) {
    return (
      <div className="title-screen">
        <h1>DON’T TRASH IT!</h1>
        <p>DO YOU WANT TO START GAME?</p>
        <button onClick={onYes}>YES</button>
        <button>NO</button>
      </div>
    )
  }
  
  export default Title
  