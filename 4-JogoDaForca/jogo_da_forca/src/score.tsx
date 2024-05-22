import styled from "styled-components";




const Wrapper = styled.div`
justify-content: center;
flex-direction: column;
padding-top:60px;
@media(max-width:600px){
    padding-top:0px;
}

`
;

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: pink;
  }
`;
const Placar = styled.div`
  background-color: red;
  border: 1px solid ##D2691E;
  width: 300px;
  border-radius: 10px;
  @media (max-width: 700px) {
  }
`;

interface ScoreProps{
    countWin: number;
    countLoser: number;
    restartGame: ()=> void;
    isLoser: boolean;
    isWinner: boolean;
}

export default function Score({countWin, countLoser, restartGame, isLoser, isWinner}:ScoreProps){
    return(
        <Wrapper>
           {isLoser && (
  <div style={{}}>
    <h3 style={{color:'red'}}> 

      Errou feio.
    </h3>
    <Placar>
    
    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Vitórias: {countWin}</p>
        <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Derrotas: {countLoser}</p>
    
    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Partidas Totais: {countLoser + countWin}</p>
    </Placar>
    <Button onClick={restartGame}> Recomeçar </Button> </div> )} 


            {isWinner && (
               <div style={{}}>
               <h3 style={{color:'white'}}> 
           
                 Parabéns, você acertou!
               </h3>
               <Placar>
               
               <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Vitórias: {countWin}</p>
                   <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Derrotas: {countLoser}</p>
               
               <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Partidas Totais: {countLoser + countWin}</p>
               </Placar>
               <Button onClick={restartGame}> Recomeçar </Button> </div> )}  
        </Wrapper>

    )
}




