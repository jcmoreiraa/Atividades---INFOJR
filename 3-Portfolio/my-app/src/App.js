import avatar from './imagens/avatar.jpg';
import imagem from './imagens/imagem.png';
import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav>
          <div className="Left-aligned">
            <p className='Nome'>Stefanny Oliveira</p>
            <ul className="Destaque">
              <li>Section two</li>
              <li>Section three</li>
              <li>Section four</li>
            </ul>
          </div>
        </nav>
        
        <nav>
          <div className="Right-aligned">
            <ul className="Destaque">
              <li><FaTwitter className="Icon"/></li>
              <li><IoLogoFigma className="Icon"/></li>
              <li><FiInstagram className="Icon"/></li>
            </ul>

            <div className='DarkMode'>
              <p>Dark mode:</p>
              <button>toggle</button>
            </div>
          </div>
        </nav>
        
      </header>

      <main>
        <div className="Inicio">
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

            <div className='Aviso'>
              <p>Available for work and general design goodness - <span className='Destaque'>say hello</span></p>
            </div>
        </div>

        <hr className='DivisorDois'/>

        <div className="Conteudo">
          <div className="SectionTwo">
            <h2 className="Destaque">Title</h2>      
            <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
          </div>

          <div className="SectionThree">
            <img src={imagem} className='Painel'/>
            <div className="Texto">
              <h4>Title</h4>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button className="Destaque Botao">Button Primary Light</button>
            </div>
          </div>

          <div className="SectionFour">
            <img src={imagem} className='Painel'/>
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
