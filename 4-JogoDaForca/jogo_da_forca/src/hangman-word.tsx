import styled from "styled-components"

const Wrapper = styled.div `
display: flex;
gap: 0.75rem;
justify-content:center;
font-size: 3.5rem;
text-transform: uppercase;
font-weight: bold;
font-family: 'Arial';
width:100%;
@media(max-width:700px){
    gap:0.05rem;
    font-size:2.5rem;
    
}

`

interface HangmanWordProps{
    word: string
    GuessedLetters : string[]
    reveal:boolean
}

export default function HangmanWord({word, GuessedLetters,reveal}:HangmanWordProps){
    return (
        
        <Wrapper > {word.split("").map((letra, index) => (
            <span className="letters" style={{borderBottom:'0.25rem solid black', minWidth: '45px'}}key = {index}> 
            <span  style={{visibility:GuessedLetters.includes(letra)||reveal? 'visible': "hidden", color:!GuessedLetters.includes(letra)? 'red':"black", width:'10px'}}>{letra}</span>
            </span>))} 
        </Wrapper>
    )
        }
