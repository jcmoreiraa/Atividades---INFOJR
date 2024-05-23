import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Keyboard from './Keyboard';
import HangmanDrawing from './hangman-drawing';
import HangmanWord from './hangman-word';
import Score from './score';






const HangmanParts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 350px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    @media (max-width: 600px) {
        padding-top:50px;
    }
    `;
const Button = styled.button`
background-color: red;
borderRadius: '10%';
padding: "10px 20px";
boxShadow: '2px 2px 4px rgba(0, 0, 0,1)';

&:hover {
    background-color: Firebrick;
`;

const words = ['endou', 'gouenji', 'kidou', 'kazemaru', 'kabeyama',
  'matsuno', 'someoka', 'domon', 'handa',
  'shishido', 'ichinose', 'tsunami', 'fubuki', 'fudou',
  'sakuma', 'afuro'];

function App() {
    const [isShow, setIsShow] = useState(false);
    const [wordToGuess,setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });
    const [GuessedLetters, SetGuessedLetters] = useState<string[]>([]);
    const incorrectGuesses = GuessedLetters.filter((letter) => !wordToGuess.includes(letter));

    function addGuessedLetters(letter: string) {
        if (GuessedLetters.includes(letter) || isLoser||isWinner) return;
        SetGuessedLetters(GuessedLetters => [...GuessedLetters, letter]);
    }
    const [countWin, setCountWin] = useState(0);
    
    const [countLose,setCountLose ] = useState(0);
    useEffect(()=>{
        if (isWinner){
            setCountWin(countWin+1)
        }
        if (isLoser){
            setCountLose(countLose+1)

        }
    
    }, [GuessedLetters]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase(); 
            if (!key.match(/^[a-z]$/)) return;
            e.preventDefault();
            addGuessedLetters(key);
        };
        
       

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [GuessedLetters]);

    
    const restartGame = () => {
        setWordToGuess( words[Math.floor(Math.random() * words.length)]);
        SetGuessedLetters([]);
        };
    


    const isLoser = incorrectGuesses.length >=6;
    const isWinner = wordToGuess.split('').every((letter)=>GuessedLetters.includes(letter))
    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            if (e.key === 'Enter' && (isLoser || isWinner)) {
                restartGame();
            }
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [isLoser, isWinner]);
    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            if (e.key === 'Enter') {
             setIsShow(() => true);
            }
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, []);
  return (
        <Wrapper>
            
            {!isShow && (
              <Button onClick={() => setIsShow(true)}>
              Clique Enter
              </Button>
           
            )}
            <Score countWin={countWin} countLoser={countLose} restartGame={restartGame} isLoser={isLoser} isWinner={isWinner}/>

            {isShow && (
                <HangmanParts>

                    {(isShow && (!isWinner && !isLoser) )&&<h2>Jogo da Forca</h2>}
                    <HangmanDrawing NumberOfGuesses={incorrectGuesses.length}/>
                    <HangmanWord GuessedLetters={GuessedLetters} word={wordToGuess} reveal={isLoser} />
                </HangmanParts>
            )}
            {(!isWinner && !isLoser && isShow) && (
            <h4> Personagens de Super Onze</h4>)}

            {isShow && <div style={{}}>
                <Keyboard 
                activeLetters = {GuessedLetters}
                inactiveLetters = {incorrectGuesses}
                addGuessedLetters={addGuessedLetters}
                disabled = {isLoser || isWinner || !isShow}
                wordToGuess = {incorrectGuesses}
                />
            </div>}
        </Wrapper>
    );
}

export default App;
