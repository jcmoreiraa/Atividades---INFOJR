import styled, { keyframes } from 'styled-components';




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
  display:none;
  transition: background-color 0.3s;

  &:hover {
    background-color: pink;
  }
  @media(max-width:600px){
    display:inline-block;
}

`;
const Animation = keyframes`
  to {
    visibility: hidden;
  }
`;

const Text = styled.span`
color: white;
font-weight:bold;
animation: ${Animation} 1.5s steps(2, start) infinite;
text-align:center;
@media(max-width:600px){
  display:none;
}


`

const Placar = styled.div`
  background-color: red;
  border: 1px solid ##D2691E;
  width: 300px;
  border-radius: 10px;

`;

interface ScoreProps{
    countWin: number;
    countLoser: number;
    restartGame: ()=> void;
    isLoser: boolean;
    isWinner: boolean;
    name: string;
}

export default function Score({countWin, countLoser, restartGame, isLoser, isWinner, name}:ScoreProps){
    return(
        <Wrapper>
           {isLoser && (
              <div>
                <h3 style={{color:'red'}}> 
                Errou feio, <span style={{fontWeight:'bold', color:'white'}}>{name}</span> 
                </h3>
               <Text> Aperte ENTER para reiniciar<br/>
                  Aperte ESC se quiser mudar de jogador</Text>
                <Placar>
                  <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Vitórias: {countWin}</p>
                  <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Derrotas: {countLoser}</p>
                  <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Partidas Totais: {countLoser + countWin}</p>
                </Placar>
                <Button onClick={restartGame}> Recomeçar </Button> 
              </div> )} 
            {isWinner && (
               <div>
                  <h3 style={{color:'white'}}> 
                  Parabéns <span style={{fontWeight:'bold', color:'black'}}>{name},</span> você acertou!
                  </h3>
                  <Text> Aperte ENTER para reiniciar<br/>
                  Aperte ESC se quiser mudar de jogador</Text>
                  <Placar>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Vitórias: {countWin}</p>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Derrotas: {countLoser}</p>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Partidas Totais: {countLoser + countWin}</p>
                  </Placar>
                  <Button onClick={restartGame}> Recomeçar </Button> </div> )}  
        </Wrapper>

    )
}




