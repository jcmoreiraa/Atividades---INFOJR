type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) {
    return (
        <div style={{ 
            display: 'flex', 
            gap: '2%', 
            fontSize: 'clamp(2rem, 15vw, 4rem)', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            fontFamily: 'monospace',}}>

        {wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom: '.1em solid black'}} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal 
                    ? 'visible' 
                    : 'hidden',
                    color: !guessedLetters.includes(letter) && reveal ? '#9657e7' : 'black',
                }}>{letter}</span>
            </span>
        ))}</div>
    )
}