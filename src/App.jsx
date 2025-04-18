import { useState } from 'react';
import Title from './pages/Title';
import Loading from './pages/Loading';
import Game from './pages/Game';

function App() {
    const [screen, setScreen] = useState('title');

    const handleStart = () => {
        setScreen('loading');
        setTimeout(() => setScreen('game'), 3000);
    };

    const handleThrow = () => setScreen('throw-ending');
    const handlePick = () => setScreen('pick-ending');
    const handleNo = () => alert('Maybe next time!');

    return (
        <>
            {screen === 'title' && (
                <Title onYes={handleStart} onNo={handleNo} />
            )}
            {screen === 'loading' && <Loading />}
            {screen === 'game' && (
                <Game onThrow={handleThrow} onPick={handlePick} />
            )}
        </>
    );
}

export default App;
