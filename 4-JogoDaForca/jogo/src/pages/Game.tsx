import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './SpecifcComponentsForGame/HangmanDrawing'
import { HangmanWord } from './SpecifcComponentsForGame/HangmanWord'
import  { Keyboard }  from './SpecifcComponentsForGame/Keyboard'
import words from './SpecifcComponentsForGame/wordList.json'
import './Game.css'
import { Link } from 'react-router-dom';
import Modal from './SpecifcComponentsForGame/Modal'

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }

function Game() {
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const [gameHistory, setGameHistory] = useState<{ result: string, word: string }[]>([]);

    const incorrectLetters = guessedLetters.filter(
      letter => !wordToGuess.includes(letter)
    )
  
    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))
    
    const addGuessedLetter = useCallback((letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
  
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser])
  
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
          const key = e.key
  
          if (!key.match(/^[a-z]$/)) return
  
          e.preventDefault()
          addGuessedLetter(key)
      }
      document.addEventListener('keypress', handler)
  
      return () => {
        document.removeEventListener('keypress', handler)
      }
    }, [guessedLetters])
  
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
  
        if (key !== 'Enter') return
  
        e.preventDefault()
        setGuessedLetters([])
        setWordToGuess(getWord())
    }
    document.addEventListener('keypress', handler)
  
    return () => {
      document.removeEventListener('keypress', handler)
    }
    }, [])

    useEffect(() => {
      if (isWinner) {
          setWins(wins + 1);
          setGameHistory(currentHistory => [...currentHistory, { result: 'Vitória', word: wordToGuess }]);
          setShowModal(true);
      } else if (isLoser) {
          setLosses(losses + 1);
          setGameHistory(currentHistory => [...currentHistory, { result: 'Derrota', word: wordToGuess }]);
          setShowModal(true);
      }
  }, [isWinner, isLoser, wordToGuess]);

  const resetGame = () => {
      setGuessedLetters([]);
      setWordToGuess(getWord());
      setShowModal(false);
  };

  return (
    <div className='game'>
      <div className='jogo'>
        <div style={{fontSize: '2rem', textAlign: 'center'}}>
          {isWinner && 'Winner!'}
          {isLoser && 'Nice Try'}
        </div>

        <div className='meio'>
          <div className='hangman'>
            <div className='boneco'>
              <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            </div>

            <div className='palavra'>
              <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
            </div>
          </div>

          <div className='teclado'>
            <Keyboard 
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}/>
          </div>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <div className='placar'>
              <div>Vitórias: {wins}</div>
              <div>Derrotas: {losses}</div>
          </div>
          <div className='historico'>
              <h3>Histórico de Partidas</h3>
              <ul>
                {gameHistory.map((game, index) => (
                <li key={index}>{game.result}: {game.word}</li>
                ))}
              </ul>
            </div>
          <button onClick={resetGame}>Novo jogo</button>
        </Modal>

        <div className='final'>
          <button className='btn primeiro' onClick={resetGame}>Novo jogo</button>
          <Link className='btn segundo' to="/">Desistir</Link>
        </div>
      </div>
    </div>
  );
};

export default Game;