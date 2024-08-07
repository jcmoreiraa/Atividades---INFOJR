import { useState, useEffect } from 'react';
import './App.css'; 
import VectorImage from './assets/Vector (1).png'; 
import VectorImagem from './assets/Vector (2).png'; 
import twitter from './assets/twitter-icon.png';
import info from './assets/infojr.png';
import check from './assets/check (1).png';
import julio from './assets/julio cesar eu mesmo (1).jpg';
import ufba from './assets/ufba (1).jpg';
import menuu from './assets/menu.png';
import twitter_dark from './assets/Vector (5).png';
import insta_dark from './assets/Vector (4).png';
import vector_dark from './assets/Vector (3).png';
import menu_dark from './assets/Group.png';
import fechar from './assets/fechar.png';
import fechar_dark from './assets/fechar-dark.png';

function App() {
  const [showSection, setShowSection] = useState(false);
  const toggleShowSection = () => {
    setShowSection(prevState => !prevState);
    
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState)
  };
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');

    }
  }, [isDarkMode]);

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
      <header className={isDarkMode ? 'dark-mode' : 'light-mode'}>
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
           { !isDarkMode && (<div className="redes">
            <a href="" id='redes'> <img src={twitter} alt="Minha Imagem" /> </a>
            <a href="#" id='redes'><img src={VectorImage} alt="Minha Imagem" /></a>
            <a href='#' id='redes'> <img src={VectorImagem} alt="Minha Imagem" /></a></div>)}
          { isDarkMode && (<div className="redes_dark">
            <a href="" id='redes'> <img src={twitter_dark} alt="Minha Imagem" /></a>
            <a href="#" id='redes'><img src={vector_dark} alt="Minha Imagem" /></a>
            <a href='#' id='redes'> <img src={insta_dark} alt="Minha Imagem" /></a></div>)}
          <div className="togle">
            <p className="dm"> Dark mode:</p>
            <label className="switch">
            <input onClick={toggleDarkMode}  type="checkbox"/>
               <span className="slider round"> </span>
            </label>
          </div>
        </div>
      </header>
            
    <main>
      <section >
        {!isDarkMode && !showSection && (<button className='menu'><img  className='menu' onClick={toggleShowSection} src={menuu}></img></button>)}
        {isDarkMode && !showSection && (<button className='menu'><img  className='menu' onClick={toggleShowSection} src={menu_dark}></img></button>)}
        {!isDarkMode && showSection && (<button className='menu'><img  className='menu' onClick={toggleShowSection} src={fechar}></img></button>)}
        {isDarkMode && showSection && (<button className='menu'><img  className='menu' onClick={toggleShowSection} src={fechar_dark}></img></button>)}

        {showSection && (
            <div className='meu_codigo_esta_uma_bagunça'>
              <nav className="section__"> 
                <ul className="section_2">
                  <li><a onClick={toggleShowSection} id='section' href="#1">Section Two</a></li>
                  <li><a onClick={toggleShowSection} id='section' href="#2">Section Three</a></li>
                  <li><a onClick={toggleShowSection} id='section' href="#3">Section Four</a></li>
                </ul>
              </nav>
              {!isDarkMode && (<div className="redes_">
                <a href="" id='redes'> <img src={twitter} alt="Minha Imagem" /> </a>
                <a href="#"id='redes'><img src={VectorImage} alt="Minha Imagem" /></a>
                <a href='#'id='redes'> <img src={VectorImagem} alt="Minha Imagem" /> </a></div>)}
              {isDarkMode &&(<div className="redes_dark_">
                <a href=""id='redes'> <img src={twitter_dark} alt="Minha Imagem" /> </a>
                <a href="#"id='redes'><img src={vector_dark} alt="Minha Imagem" /></a>
                <a href='#'id='redes'> <img src={insta_dark} alt="Minha Imagem" /> </a></div>)}
            </div>)}
          
        {!showSection && (
        <div>
        <div id="1" className='first_text'>
          <div className="x">
            <img className='minha_foto' src={julio}></img>
          </div>
          <h1 className='hello'> Hello. <br></br>My name is Júlio César</h1>
          <div className={!isDarkMode? 'linha': 'linha-dark'}></div>
          <p className='first_text_big'> 
          <span style={{ fontWeight: 'bold' }}> I'm a Computer Science enthusiast at UFBA</span>, currently participating in an exciting trainee selection process at InfoJr. I'm focused on delivering web programming projects that blend functionality and elegance. My passion lies in simplifying complex processes and creating intuitive digital experiences for end users.<p></p> 
          As part of my commitment to excellence, I'm constantly honing my skills in various languages, including
          <span style={{ fontWeight: 'bold' }}> Python, C++, Ruby, and JavaScript </span> 
           as well 
           <span style={{ fontWeight: 'bold' }}> as HTML and CSS. </span>
            I'm excited to collaborate with a dynamic and diverse team where I can contribute my expertise in real projects.<p></p>
          While my professional journey is just beginning, I'm eager to apply my passion for technology and my desire for continuous learning to tackle exciting challenges and drive team success.</p>
        </div> 
        <div className={!isDarkMode? 'avaliable': 'avaliable-dark'}>
          <img  className="check" src={check}></img>
          <p>Available for work and development of projects – say hello!</p>
        </div>
        <div className={!isDarkMode? 'linha_azul': 'linha_azul_dark'}></div>
        </div> )}
      </section>
      
      {!showSection && (
      <section>
        <h1 className='title' id='title'> Title </h1>
        <p className='texto__'>
          Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
        </p>
        <div id="2" className='primeira_imagem_texto'> 
          <div className='espaço_para_imagem'> <img id='ufba' src={ufba}></img> </div>
          <div className='texto_e_titulo'>
            <h5 className='title'> Title</h5>
            <p className='leanding'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button className={ !isDarkMode? 'bpl':'bpl_dark'}> {isDarkMode ? 'Button Primary Dark' : 'Button Primary Light'}</button>
            
          </div>
        </div> 
        <div id="3" className='segunda_imagem_texto'>
          <div className='texto_e_titulo'>
            <h5 className='title'> Title</h5>
            <p className='leanding'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button className={ !isDarkMode? 'bpl':'bpl_dark'}> {isDarkMode ? 'Button Primary Dark' : 'Button Primary Light'}</button>
          </div>
         <img id='info' src={info}></img>
        </div>
          
      </section> )}
    </main>
  </body>
);
}

export default App;
