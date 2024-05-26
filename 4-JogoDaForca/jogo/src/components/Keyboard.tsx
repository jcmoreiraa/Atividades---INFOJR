import styles from './keyboard.module.css'

const KEYS = [
    "q","w","e","r","t","y","u","i","o","p",
    "a","s","d","f","g","h","j","k","l",
    "z","x","c","v","b","n","m",
  ]

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string [] 
    inactiveLetters: string[] 
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({disabled = false, activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    const rows = [
        KEYS.slice(0, 10),  
        KEYS.slice(10, 19), 
        KEYS.slice(19) 
      ];
   
    return (
        <div className={styles.keyboard}>
        {rows.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map(key => {
              const isActive = activeLetters.includes(key);
              const isInactive = inactiveLetters.includes(key);
  
              return (
                <button
                  onClick={() => addGuessedLetter(key)}
                  className={`${styles.button} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                  disabled={isInactive || isActive || disabled}
                  key={key}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    );
  }