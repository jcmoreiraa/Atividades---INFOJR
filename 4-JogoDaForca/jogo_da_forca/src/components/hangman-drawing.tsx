import styled from "styled-components"

const Base = styled.div`
height: 10px;
 width: 250px; 
 background: black;
 margin-left:100px
 `

 const Vertical= styled.div`
height: 250px;
 width: 10px; 
 background: black;
 margin-left:140px;
 `


 const Above = styled.div `
 height: 10px;
 width: 160px; 
 background: black;
 position:absolute;
 right:40px;
 top: 0;
 `
 const VerticalAbove= styled.div`
height:30px;
 width: 10px; 
 background: black;
 position: absolute;
 right:30px;
 top:0px;

 `
 const Head= styled.div`
 height:30px;
  width: 30px; 
  border-radius: 50%;
  position: absolute;
  right:15px;
  top:28px;
  border: 5px solid black;
  background:red;
 
  `
 


  const Body= styled.div`
  height:85px;
   width: 10px; 
   position: absolute;
   right:27px;
   top:65px;
   border: 3px solid black;
   background:red;
  
   `
   const RigthArm= styled.div`
  height:10px;
   width: 50px; 
   position: absolute;
   right:-25px;
   top:75px;
   border: 3px solid black;
   background:red;
   rotate: -28deg;
  
   `
   const LeftArm= styled.div`
   height:10px;
    width: 50px; 
    position: absolute;
    right:40px;
    top:75px;
    border: 3px solid black;
    background:red;
    rotate: 28deg;
   
    `
    const LeftLeg= styled.div`
   height:10px;
    width: 50px; 
    position: absolute;
    right:40px;
    top:155px;
    border: 3px solid black;
    background:red;
    rotate: -30deg;
   
    `
    const RightLeg= styled.div`
   height:10px;
    width: 50px; 
    position: absolute;
    right:-25px;
    top:155px;
    border: 3px solid black;
    background:red;
    rotate: 30deg;
   
    `

    const bodyParts = [Head, Body, RigthArm, LeftArm, RightLeg, LeftLeg]
    interface HangmanDrawingProps{
        NumberOfGuesses:number
    }
export default function HangmanDrawing({NumberOfGuesses}:HangmanDrawingProps){
    return (
        <div style={{position:'relative'}}>
            {bodyParts.slice(0,NumberOfGuesses).map((BodyPart,index)=> { return <BodyPart key={index}/>})}
            <VerticalAbove />
            
            <Above />
            <Vertical />
            <Base />
        </div>
    )
}
