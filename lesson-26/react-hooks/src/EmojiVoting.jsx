import {useEffect, useState} from "react";

function EmojiVoting (){
    const [emojis, setEmojis] = useState([
        { id: 1, symbol: '😃', votes: 0 },
        { id: 2, symbol: '😊', votes: 0 },
        { id: 3, symbol: '😎', votes: 0 },
        { id: 4, symbol: '🤩', votes: 0 },
        { id: 5, symbol: '😍', votes: 0 },
    ]);

    const [resultsDisplay, setResultsDisplay] = useState(false);
    const [winnerIsFounded, setWinnerIsFounded] = useState(false);
    const [winner, setWinner] = useState('');

    useEffect(() => {
        const storedVotes = localStorage.getItem('emojiVotes');
        if (storedVotes) {
            setEmojis(JSON.parse(storedVotes));
        }
    }, []);

    const saveToLocalStorage = (emojis) => {
        localStorage.setItem('emojiVotes', JSON.stringify(emojis));
    }

    const handleVote = (id) => {
        const updatedEmojis = emojis.map(emoji => {
            if (emoji.id === id) {
                return { ...emoji, votes: emoji.votes + 1 };
            }
            return emoji;
        });

        setEmojis(updatedEmojis);
        saveToLocalStorage(updatedEmojis);
    };

    const handleResult = () =>  setResultsDisplay(true);
    const handleWinner = (winner, winnerState) => {
        setWinner(winner);
        setWinnerIsFounded(winnerState);
    };
    const findWinner = () => {
        const maxVotes = Math.max(...emojis.map(e => e.votes));

        if (maxVotes === 0) {
            handleWinner('Немає явного переможця!', false)
            return;
        }

        const winners = emojis.filter(e => e.votes === maxVotes);

        if (winners.length === 1) {
            handleWinner(winners[0], true)
        } else {
            handleWinner('Немає явного переможця!', false)
        }
    }

    const clearResults = () => {
        const resetEmojis = emojis.map((emoji) => ({ ...emoji, votes: 0 }));
        setEmojis(resetEmojis);
        setResultsDisplay(false);
        setWinnerIsFounded(false);
        setWinner('');
        saveToLocalStorage(resetEmojis);
    };

    return (
        <div>
            <h1>Голосування за найкращий смайлик</h1>
            <div style={{ display: 'flex', gap: '20px', fontSize: '2rem' }}>
                {emojis.map((emoji) => (
                    <div key={emoji.id} onClick={() => handleVote(emoji.id)} style={{ cursor: 'pointer' }}>
                        <div>{emoji.symbol}</div>
                        <div>{emoji.votes}</div>
                    </div>
                ))}
            </div>

            <div className="results">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleResult();
                        findWinner();
                    }}
                >
                    Показати переможця
                </button>

                {resultsDisplay && (
                    <div className="winner">
                        <h2>Переможець:</h2>
                        {typeof winner === 'string' ? <p>{winner}</p> : <div>{winner.symbol}</div>}

                        {winnerIsFounded && <button onClick={clearResults}>Очистити результати</button>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmojiVoting;
