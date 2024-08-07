import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Keyboard from './components/Keyboard';
import HangmanDrawing from './components/hangman-drawing';
import HangmanWord from './components/hangman-word';
import Score from './components/score';

const HangmanParts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 350px;
    padding-right:100px;
    @media (max-width: 500px) {
        padding-right:100px;
    }
    @media (max-width: 600px) {
        padding-right:100px;
    }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    @media (max-width: 600px) {
    }
    @media (max-width: 500px) {
    }
    
`;
const Button = styled.button`
    background-color: red;
    borderRadius: '10%';
    padding: "10px 20px";
    boxShadow: '2px 2px 4px rgba(0, 0, 0,1)';
    border:none;

    &:hover {
        background-color: pink;
        `;

const Input = styled.input`
        width: 100%;
        padding: 8px;
        margin-bottom: 16px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      `;
const words = ['endou', 'gouenji', 'kidou', 'kazemaru', 'kabeyama',
  'matsuno', 'someoka', 'domon', 'handa',
  'shishido', 'ichinose', 'tsunami', 'fubuki', 'fudou',
  'sakuma', 'afuro'];

function App() {
    const [isShow, setIsShow] = useState(false);
    const [name, setName] = useState('')

    const [wordToGuess,setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [GuessedLetters, SetGuessedLetters] = useState<string[]>([]);

    const incorrectGuesses = GuessedLetters.filter((letter) => !wordToGuess.includes(letter));

    function addGuessedLetters(letter: string) {
        if (GuessedLetters.includes(letter) || isLoser||isWinner) return;
        SetGuessedLetters(GuessedLetters => [...GuessedLetters, letter]);
    }
    function restartGame() {
        setWordToGuess( words[Math.floor(Math.random() * words.length)]);
        SetGuessedLetters([]);

    };

    function changePlayer() {
        setIsShow(() => false);
        setName(() => "");
        setCountLose(() => 0);
        setCountWin(() => 0);
        restartGame();
    }

    const [countWin, setCountWin] = useState(0);
    const [countLose,setCountLose ] = useState(0);
    const isLoser = incorrectGuesses.length >=6;
    const isWinner = wordToGuess.split('').every((letter)=>GuessedLetters.includes(letter))
    const buttonStyle = name.trim() != ""
    ? { animation: 'pulse 1s steps(2, start) infinite' }
    : {};

    useEffect(()=>{
        if (isWinner){
            setCountWin(countWin+1)
        }
        if (isLoser){
            setCountLose(countLose+1)

        }
    
    }, [GuessedLetters]);


    useEffect(() => {
        
        if (isShow){
        const handler = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase(); 
            if (!key.match(/^[a-z]$/)) return;
            e.preventDefault();
            addGuessedLetters(key);
        };
        
       

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };}
    }, [GuessedLetters, isShow]);
    
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
            if (e.key === 'Enter' && (name.trim() != '')) {
             setIsShow(() => true);
            }
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [name]);
    useEffect(() => {

        const handler = (e:KeyboardEvent) => {
            if (e.key === 'Escape' && (isLoser || isWinner)) {
                changePlayer();
                
            }
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [isLoser, isWinner]);
    

  return (
        <Wrapper>
            {!isShow && ( 
            <div style={{gap:'20px', display:'flex', flexDirection:'column', paddingBottom:'100px' }}>
              <Button style={buttonStyle}  disabled={(name.trim() === '')} onClick={() => setIsShow(true)}>
                {name.trim() === ''? 'Não adianta clicar enter' : 'Clique enter'}
                
              </Button>
              <Input placeholder='Digite o nome do jogador'
              value={name}
              onChange={(e) => setName(e.target.value)}/>
            </div>
           
            )}
            {isShow&&(
            
            <Score countWin={countWin} countLoser={countLose} restartGame={restartGame} isLoser={isLoser} isWinner={isWinner} name={name} changePlayer={changePlayer}/>)}

            {isShow && (
                <HangmanParts>
                    {(isShow && (!isWinner && !isLoser) )&& <h2 style={{paddingLeft:'30px', color:'white'}}>Jogo da Forca</h2>}
                    <HangmanDrawing NumberOfGuesses={incorrectGuesses.length}/>
                    <HangmanWord GuessedLetters={GuessedLetters} word={wordToGuess} reveal={isLoser}/>
                </HangmanParts>
            )}
            
            {(!isWinner && !isLoser && isShow) && (
                <h4 style={{color:'white'}}> Personagens de Super Onze</h4>)}

            {isShow && <div>
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
