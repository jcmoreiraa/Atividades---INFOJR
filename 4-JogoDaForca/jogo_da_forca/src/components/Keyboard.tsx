import styled from "styled-components"

const keys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'

];

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(60px, 2fr));
gap:0.5rem;
width: 650px;
margin-bottom:20px;
@media(max-width:600px){
width: 450px;
    display: grid;
    text-align:center;
grid-template-columns: repeat(auto-fit, minmax(50px, 2fr));
gap:0.3rem;
}
@media(max-width:500px){
    width: 350px;
    display: grid;
    text-align:center;
grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
gap:0.3rem;
}

`

const Button = styled.button<{isActive:boolean,isIncorrect:boolean }>`
opacity:${(p)=>(p.isActive ? '1':'0.3')};
cursor: ${(p) => (p.isActive? 'pointer' : 'not-allowed')};
background-color: ${(p) => (p.isIncorrect ? '#1C1C1C' : 'grey')};
`

interface KeyBoardProps{
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetters: (letter: string) => void
    disabled:boolean
    wordToGuess: string[];

}
export default function Keyboard({activeLetters, disabled=true, inactiveLetters, addGuessedLetters, wordToGuess}:KeyBoardProps){
    return (
        <Wrapper>
       {keys.map((letter) => {
       const isActive = !activeLetters.includes(letter);
       const isIncorrect = !wordToGuess.includes(letter);
       const isInactive = !inactiveLetters.includes(letter);
       return (  

       
        <Button style={{ color:'white'}}onClick={()=> addGuessedLetters(letter)}isActive={isActive && isInactive} key={letter} disabled={disabled} isIncorrect={isIncorrect}>
            {letter}
        </Button>
       )})}

        </Wrapper>
    )
}



