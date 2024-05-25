import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='centro'>
        <div className='name'>
          <p className='titulo'>Jogo</p>
          <p className='titulo'>Da</p>
          <p className='titulo'>Forca</p>
        </div>
        <Link className='botao primeiro' to="/game">Começar a jogar</Link>
      </div>
      
    </div>
  );
};

export default Home;