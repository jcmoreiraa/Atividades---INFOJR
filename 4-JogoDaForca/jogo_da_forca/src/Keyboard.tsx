import styled from "styled-components"

const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
gap:0.3rem;
width: 700px;
display:none;
margin-bottom:20px;
@media(max-width:700px){
width: 450px;
grid-template-columns: repeat(auto-fit, minmax(50px,2fr));
gap:0.8rem;
display:inline-block;




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



