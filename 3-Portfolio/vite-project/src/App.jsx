import { useState, useEffect } from 'react';
import './App.css'; 
import VectorImage from './assets/Vector (1).png'; 
import VectorImagem from './assets/Vector (2).png'; 
import twitter from './assets/twitter-icon.png';
import avatar from './assets/avatar.png';
import check from './assets/check (1).png';
import julio from './assets/julio cesar eu mesmo (1).jpg';
import ufba from './assets/ufba (1).png';
import menuu from './assets/menu.png';
import teste from './assets/teste.png';

function App() {
  const [count, setCount] = useState(0);
  const [showSection, setShowSection] = useState(false);
  const toggleShowSection = () => {
    setShowSection(prevState => !prevState);
    
  };

  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth > 1000) {
        setShowSection(false);
      } 
    };
    window.addEventListener('resize', handleWindowSizeChange);

  }, []);

  

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
              <li><a id='section' href="#1">Section Two</a></li>
              <li><a id='section' href="#2">Section Three</a></li>
              <li><a id='section' href="#3">Section Four</a></li>
            </ul>
          </nav>
        </div>
        <div className="redes_e_botao">
          <div className="redes">
        <a href=""> <img src={twitter} alt="Minha Imagem" /> </a>
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
      <section >
      <button className='menu'><img  className='menu' onClick={toggleShowSection} src={menuu}></img></button>

      { showSection && (
            <div className='meu_codigo_esta_uma_bagunça'>
              <nav className="section__"> 
                <ul className="section_2">
                  <li><a onClick={toggleShowSection} id='section' href="#1">Section Two</a></li>
                  <li><a onClick={toggleShowSection} id='section' href="#2">Section Three</a></li>
                  <li><a onClick={toggleShowSection} id='section' href="#3">Section Four</a></li>
                </ul>
              </nav>
              <div className="redes_">
                <a href=""> <img src={twitter} alt="Minha Imagem" /> </a>
                <a href="#"><img src={VectorImage} alt="Minha Imagem" /></a>
                <a href='#'> <img src={VectorImagem} alt="Minha Imagem" /> </a>
              </div>
            </div>
          )}
          
        {!showSection && (<div>
        <div id="1" className='first_text'>
          <div className="x">
            <img className='minha_foto' src={julio}></img>

          </div>
          <h1 className='hello'> Hello. <br></br>My name is Júlio César</h1>
        <div className='linha'></div>
        <p className='first_text_big'>I'm a Computer Science enthusiast at UFBA, currently participating in an exciting trainee selection process at InfoJr. I'm focused on delivering web programming projects that blend functionality and elegance. My passion lies in simplifying complex processes and creating intuitive digital experiences for end users.<p></p> 
        As part of my commitment to excellence, I'm constantly honing my skills in various languages, including Python, C++, Ruby, and JavaScript, as well as HTML and CSS. I'm excited to collaborate with a dynamic and diverse team where I can contribute my expertise in interface design and digital product development.<p></p>
        While my professional journey is just beginning, I'm eager to apply my passion for technology and my desire for continuous learning to tackle exciting challenges and drive team success.</p>
        </div> 
       <div className='avaliable'>
          <img  className="check" src={check}></img>
          <p>Available for work and general design goodness – say hello</p>
          </div>
          <div className='linha_azul'>

          </div></div> )}
          </section>


       {!showSection && (<section>
        <h1 className='title' id='title'> Title </h1>
        <p className='texto__'>
        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
        </p>
        <div id="2" className='primeira_imagem_texto'> 

        <div className='espaço_para_imagem'> </div>
        <div className='texto_e_titulo'>
          <h5 className='title'> Title</h5>
          <p className='leanding'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button className='bpl'> Button Primary Light</button>
          </div>
        </div> 
        <div id="3" className='segunda_imagem_texto'>
        <div className='texto_e_titulo'>
          <h5 className='title'> Title</h5>
          <p className='leanding'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button  className='bpl'> Button Primary Light</button> </div>
        <div className='espaço_para_imagem'>
        
        </div>
        </div>
          
       </section> )}
      </main>
    </body>
  );
}

export default App;
