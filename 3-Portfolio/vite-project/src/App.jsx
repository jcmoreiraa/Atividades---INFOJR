import { useState } from 'react';
import './App.css'; 
import VectorImage from './assets/Vector (1).png'; 
import VectorImagem from './assets/Vector (2).png'; 
import twitter from './assets/twitter-icon.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <header>
        <div className='kevin'> 
          <div className='nome'> 
            <h4> 
              Kevin Bennet
            </h4>  
          </div>
          <nav className="section_"> 
            <ul className="section">
              <li><a href="#section-two">Section Two</a></li>
              <li><a href="#section-three">Section Three</a></li>
              <li><a href="#section-four">Section Four</a></li>
            </ul>
          </nav>
        </div>
        <div className="redes_e_botao">
          <div className="redes">
        <a href="#"> <img src={twitter} alt="Minha Imagem" /> </a>
        <a href="#"><img src={VectorImage} alt="Minha Imagem" /></a>
        <a href='#'> <img src={VectorImagem} alt="Minha Imagem" /> </a></div>
        
        <div className="togle">
          <p className="dm"> Dark mode: </p>
          <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
        </div>
        </div>
      </header>
    </body>
  );
}

export default App;
