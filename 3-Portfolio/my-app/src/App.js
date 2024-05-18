import avatar from './imagens/avatar1.png';
import clamp1 from './imagens/clamp1.jpg';
import clamp2 from './imagens/clamp2.jpg';
import clamp3 from './imagens/clamp3.jpe';
import osu1 from './imagens/osu1.jpg';
import osu2 from './imagens/osu2.jpeg';
import osu3 from './imagens/osu3.jpg';

import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function darkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active)
  };

  const Section1Ref = useRef(null);
  const Section2Ref = useRef(null);
  const Section3Ref = useRef(null);
  const Section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className={isDarkMode ? "dark-mode" : "App"}>
      <header className="App-header">

        <p className='Nome'>Stefanny Oliveira</p>

        <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
          <nav>
              <ul className="Destaque Esquerda">
                <li className='Home' onClick={() => scrollToSection(Section1Ref)}>Stefanny Oliveira</li>
                <li onClick={() => scrollToSection(Section2Ref)}>Section two</li>
                <li onClick={() => scrollToSection(Section3Ref)}>Section three</li>
                <li onClick={() => scrollToSection(Section4Ref)}>Section four</li>
              </ul>
          </nav>
          
          <nav>
              <ul className="Destaque Direita">
                <li><FaTwitter className="Icon"/></li>
                <li><IoLogoFigma className="Icon"/></li>
                <li><FiInstagram className="Icon"/></li>
              </ul>
          </nav>
        </div>
        
        <div className='DarkMode'>
          <p className='DM'>Theme: </p>
          <input type='checkbox' onClick={darkMode}></input>
        </div>
        
        
      </header>

      <main>
        <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
          <div className='hamburguer hamburguerIcon'></div>
        </div>

        <div className="Inicio" ref={Section1Ref}>
            <div className="Profile">
              <img src={avatar} className="Foto"/>
              <div className="Hello">
                <h1 className="Destaque">Hello.</h1>
                <h1 className="Destaque">My name is Stefanny.</h1>
              </div>
            </div>

            <hr className='DivisorUm'/>

            <div className="Apresentacao">
              <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
              <p>Right now, I'm Design Lead at <span className="Destaque">Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className="Destaque">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
              <p>I've got some <span className="Destaque">work on Dribbble</span>, some previous work at <span className="Destaque">Saga</span> and you can find me over on twitter and sometimes <span className="Destaque">on Medium too</span>. I also take <span className="Destaque">too many photos</span>.</p>
            </div>

            <div className='Aviso Check'>
              <FaCheckCircle className='Destaque check'/>
              <p className='aviso'>Available for work and general design goodness - <span className='Destaque'>say hello</span></p>
            </div>
        </div>

        <hr className='DivisorDois'/>

        <div className="Conteudo">
          <div className="SectionTwo" ref={Section2Ref}>
            <h2 className="Destaque">Title</h2>      
            <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
          </div>

          <div className="SectionThree" ref={Section3Ref}>
            
            <Carousel slide={false}>
              <Carousel.Item>
                <img src={clamp1} className='Painel'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={clamp2} className='Painel'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={clamp3} className='Painel'/>
              </Carousel.Item>
            </Carousel>


            <div className="Texto">
              <h4>Title</h4>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button className="Destaque Botao">Button Primary Light</button>
            </div>
          </div>

          <div className="SectionFour" ref={Section4Ref}>

            <Carousel slide={false}>
              <Carousel.Item>
                <img src={osu1} className='Painel'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={osu2} className='Painel'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={osu3} className='Painel'/>
              </Carousel.Item>
            </Carousel>

            <div className="Texto">
              <h4>Title</h4>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button className="Destaque Botao">Button Primary Light</button>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}

export default App;
