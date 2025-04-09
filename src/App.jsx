import { useState } from 'react'
import Title from './pages/Title'
import Loading from './pages/Loading'
import Game from './pages/Game'
import ThrowEnding from './pages/ThrowEnding'
import PickEnding from './pages/PickEnding'

function App() {
  const [screen, setScreen] = useState('title') // 초기 화면은 title

  const handleStart = () => {
    setScreen('loading')
    setTimeout(() => setScreen('game'), 2000) // 2초 후 game 시작
  }

  const handleThrow = () => setScreen('throw-ending')
  const handlePick = () => setScreen('pick-ending')

  return (
    <>
      {screen === 'title' && <Title onYes={handleStart} />}
      {screen === 'loading' && <Loading />}
      {screen === 'game' && <Game onThrow={handleThrow} onPick={handlePick} />}
      {screen === 'throw-ending' && <ThrowEnding />}
      {screen === 'pick-ending' && <PickEnding />}
    </>
  )
}

export default App
