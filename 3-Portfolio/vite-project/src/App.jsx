import { useState } from 'react';
import './App.css'; 
import VectorImage from './assets/Vector (1).png'; 
import VectorImagem from './assets/Vector (2).png'; 
import twitter from './assets/twitter-icon.png';
import avatar from './assets/avatar.png';
import check from './assets/check.png';
import julio from './assets/julio cesar eu mesmo (1).jpg';
import ufba from './assets/ufba (1).png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <header>
        <div className='kevin'> 
          <div className='nome'> 
            <h4> 
              Júlio César
            </h4>  
          </div>
          <nav className="section_"> 
            <ul className="section">
              <li><a id='section' href="#section-two">Section Two</a></li>
              <li><a id='section' href="#section-three">Section Three</a></li>
              <li><a id='section' href="#section-four">Section Four</a></li>
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
            
    <main>
      <section>
        <div className='first_text'>
          <div className="x">
            <img className='minha_foto' src={julio}></img>

          </div>
          <h1 className='hello'> Hello. <br></br>My name is Júlio César</h1>
        <div className='linha'></div>
        <p className='first_text_big'>I'm a Computer Science enthusiast at UFBA, currently participating in an exciting trainee selection process at InfoJr. I'm focused on delivering web programming projects that blend functionality and elegance. My passion lies in simplifying complex processes and creating intuitive digital experiences for end users.<p></p> 
        As part of my commitment to excellence, I'm constantly honing my skills in various languages, including Python, C++, Ruby, and JavaScript, as well as HTML and CSS. I'm excited to collaborate with a dynamic and diverse team where I can contribute my expertise in interface design and digital product development.<p></p>
        While my professional journey is just beginning, I'm eager to apply my passion for technology and my desire for continuous learning to tackle exciting challenges and drive team success."</p>
        </div>
        <div className='avaliable'>
          <img  className="check" src={check}></img>
          <p>Available for work and general design goodness – say hello</p>
          </div>
          <div className='linha_azul'>

          </div>
          </section>


       <section>
        <h2 className='title'> Title </h2>
        <p className='texto__'>
        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
        </p>
        <div className='primeira_imagem_texto'> 

        <div className='espaço_para_imagem'> </div>
        <div className='texto_e_titulo'>
          <h5 className='title'> Title</h5>
          <p className='leanding'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button className='bpl'> Button Primary Light</button>
          </div>
        </div> 
        <div className='segunda_imagem_texto'>
        <div className='texto_e_titulo'>
          <h5 className='title'> Title</h5>
          <p className='leanding'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button className='bpl'> Button Primary Light</button> </div>
        <div className='espaço_para_imagem'>
        
        </div>
        </div>
          
       </section>
      </main>
    </body>
  );
}

export default App;
