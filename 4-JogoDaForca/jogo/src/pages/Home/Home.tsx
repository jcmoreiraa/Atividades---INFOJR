import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className='home'>

      <div className='centro'>

        <div className='name'>
          <p className='titulo'>Hangman</p>
        </div>

        <Link className='botao primeiro' to="/game">START</Link>
      
      </div>
      
    </div>
  );
};

export default Home;