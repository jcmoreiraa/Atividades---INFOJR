import { useState } from 'react';
import './App.css'; 
import VectorImage from './assets/Vector (1).png'; 
import VectorImagem from './assets/Vector (2).png'; 
import twitter from './assets/twitter-icon.png';
import avatar from './assets/avatar.png';
import check from './assets/check.png';

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


      <main>

<section>
      <div className='first_text'>
      <div className="x">
         </div>
      <h1 className='hello'> Hello. <br></br>My name is Julio</h1>
       
       <div className='linha'></div>
       
       <p className='first_text_big'>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.<p></p> 
       Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.<p></p>
        I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
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











       </section>















      </main>
    </body>
  );
}

export default App;
