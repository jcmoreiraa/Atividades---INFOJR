const HEAD = (
    <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        border: '8px solid black',
        position: 'absolute',
        top: '40px',
        right: '-25px',
    }}/>
)

const BODY = (
    <div style={{
        width: '8px',
        height: '80px',
        background: 'black',
        position: 'absolute',
        top: '90px',
        right: '0',
    }}/>
)

const RIGHT_ARM = (
    <div style={{
        width: '80px',
        height: '8px',
        background: 'black',
        position: 'absolute',
        top: '120px',
        right: '-80px',
        rotate: '-30deg',
        transformOrigin: 'left bottom',
    }}/>
)


const LEFT_ARM = (
    <div style={{
        width: '80px',
        height: '8px',
        background: 'black',
        position: 'absolute',
        top: '120px',
        right: '6px',
        rotate: '30deg',
        transformOrigin: 'right bottom',
    }}/>
)

const RIGHT_LEG = (
    <div style={{
        width: '80px',
        height: '8px',
        background: 'black',
        position: 'absolute',
        top: '160px',
        right: '-72px',
        rotate: '60deg',
        transformOrigin: 'left bottom',
    }}/>
)

const LEFT_LEG = (
    <div style={{
        width: '80px',
        height: '8px',
        background: 'black',
        position: 'absolute',
        top: '160px',
        right: 0,
        rotate: '-60deg',
        transformOrigin: 'right bottom',
    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
    return (
        <div style={{position:'relative'}}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{
                height: '40px', 
                width: '8px', 
                background: 'black', 
                top: 0, 
                right: 0, 
                position: 'absolute'}}/>

            <div style={{
                height: '8px', 
                width: '140px', 
                background: 'black', 
                marginLeft: '75px'}}/>

            <div style={{
                height: '260px', 
                width: '8px', 
                background: 'black', 
                marginLeft: '75px'}}/>

            <div style={{
                height:'8px', 
                width: '160px', 
                background: 'black'}}/>
        </div>
    )
}