import styled, { keyframes } from 'styled-components';




const Wrapper = styled.div`
justify-content: center;
flex-direction: column;
@media(max-width:600px){
}

`
;

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 5px 10px 5px 10px;
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
    margin-top:20px;
}`
const ButtonChangePlayer = styled.button`
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 5px 10px 5px 10px;
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
    margin-top:20px;
}`;
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

const Scoreboard = styled.div`
  background-color: red;
  border: 1px solid ##D2691E;
  min-width: 270px;
  height: 170px;
  border-radius: 10px;
  height:auto;
  margin-top:10px;
  


`;

interface ScoreProps{
    countWin: number;
    countLoser: number;
    restartGame: ()=> void;
    isLoser: boolean;
    isWinner: boolean;
    name: string;
    changePlayer: ()=> void;

}

export default function Score({countWin, countLoser, restartGame, isLoser, isWinner, name, changePlayer }:ScoreProps){
    return(
        <Wrapper>
           {isLoser && (
              <div style={{flexDirection:'column', alignItems:'center', display:'flex'}}>
                <h3 style={{color:'red'}}> 
                Errou feio, <span style={{fontWeight:'bold', color:'white'}}>{name}</span> 
                </h3>
               <Text> Aperte ENTER para reiniciar<br/>
                  Aperte ESC se quiser mudar de jogador</Text>
                <Scoreboard >
                  <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Vitórias: {countWin}</p>
                  <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Derrotas: {countLoser}</p>
                  <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Partidas Totais: {countLoser + countWin}</p>
                </Scoreboard>
                <div style={{display:'flex', gap:'10px'}}>
                <Button onClick={restartGame}> Recomeçar </Button> 
                <ButtonChangePlayer onClick={changePlayer} > Mudar jogador</ButtonChangePlayer> </div>
              </div> )} 
            {isWinner && (
               <div style={{flexDirection:'column', alignItems:'center', display:'flex'}}>
                  <h3 style={{color:'white'}}> 
                  Parabéns <span style={{fontWeight:'bold', color:'black'}}>{name},</span> você acertou!
                  </h3>
                  <Text> Aperte ENTER para reiniciar<br/>
                  Aperte ESC se quiser mudar de jogador</Text>
                  <Scoreboard>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Vitórias: {countWin}</p>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Derrotas: {countLoser}</p>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold'}}>Partidas Totais: {countLoser + countWin}</p>
                  </Scoreboard>
                  <div style={{display:'flex', gap:'10px'}}>
                <Button onClick={restartGame}> Recomeçar </Button> 
                <ButtonChangePlayer onClick={changePlayer} > Mudar jogador</ButtonChangePlayer> </div>
                  </div> )}  
        </Wrapper>

    )
}




