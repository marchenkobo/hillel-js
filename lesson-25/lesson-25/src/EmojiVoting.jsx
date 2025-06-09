import React, { Component } from 'react';

class EmojiVoting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                { id: 1, symbol: '😃', votes: 0 },
                { id: 2, symbol: '😊', votes: 0 },
                { id: 3, symbol: '😎', votes: 0 },
                { id: 4, symbol: '🤩', votes: 0 },
                { id: 5, symbol: '😍', votes: 0 },
            ],
            resultsDisplay: false,
            winnerIsFounded: false,
            winner: '',
        };
    }

    componentDidMount() {
        const storedVotes = localStorage.getItem('emojiVotes');
        if (storedVotes) {
            const parsedVotes = JSON.parse(storedVotes);
            this.setState({ emojis: parsedVotes });
        }
    }

    saveToLocalStorage = (emojis) => {
        localStorage.setItem('emojiVotes', JSON.stringify(emojis));
    }

    handleVote = (id) => {
        const updatedEmojis = this.state.emojis.map(emoji => {
            if (emoji.id === id) {
                return { ...emoji, votes: emoji.votes + 1 };
            }
            return emoji;
        });

        this.setState({ emojis: updatedEmojis }, () => {
            this.saveToLocalStorage(this.state.emojis);
        });
    };

    handleResult = () => {
        this.setState({ resultsDisplay: true });
    }

    findWinner = () => {
        const emojis = this.state.emojis;
        const maxVotes = Math.max(...emojis.map(e => e.votes));

        if (maxVotes === 0) {
            this.setState({ winner: 'Немає явного переможця!', winnerIsFounded: false });
            return;
        }

        const winners = emojis.filter(e => e.votes === maxVotes);

        if (winners.length === 1) {
            this.setState({ winner: winners[0], winnerIsFounded: true });
        } else {
            this.setState({ winner: 'Немає явного переможця!', winnerIsFounded: false });
        }
    }


    clearResults = () => {
        const resetEmojis = this.state.emojis.map(emoji => ({
            ...emoji,
            votes: 0
        }));

        this.setState({
            emojis: resetEmojis,
            resultsDisplay: false,
            winnerIsFounded: false,
            winner: '',
        }, () => {
            this.saveToLocalStorage(this.state.emojis);
        });
    }

    render() {
        return (
            <div>
                <h1>Голосування за найкращий смайлик</h1>
                <div style={{ display: 'flex', gap: '20px', fontSize: '2rem' }}>
                    {this.state.emojis.map((emoji) => (
                        <div key={emoji.id} onClick={() => this.handleVote(emoji.id)} style={{ cursor: 'pointer' }}>
                            <div>{emoji.symbol}</div>
                            <div>{emoji.votes}</div>
                        </div>
                    ))}
                </div>

                <div className="results">
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.handleResult();
                        this.findWinner();
                    }}>Показати переможця</button>

                    {this.state.resultsDisplay && (
                        <div className="winner">
                            <h2>Переможець:</h2>
                            {typeof this.state.winner === 'string' ? (
                                <p>{this.state.winner}</p>
                            ) : (
                                <div>{this.state.winner.symbol}</div>
                            )}

                            {this.state.winnerIsFounded && (
                                <button onClick={this.clearResults}>Очистити результати</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default EmojiVoting;
