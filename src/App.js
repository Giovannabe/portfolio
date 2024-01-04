import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <xu>
      <div id="navbar" style={{ top: navbarVisible ? '0' : '-50px', display: 'flex', justifyContent: 'center' }}>

        <nav className='topp' style={{ top: navbarVisible ? '0' : '-100px', position: 'fixed', width: '45.6%', borderRadius: '10px', marginTop: '15px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent:'space-between'}}>
            <li id='iconnav'><a href="#section1"><img src='imagens/foto.jpg' /></a></li>
            <div style={{display:'flex'}}>
              <li className='iconnavs'><a href="#section1"><img src='imagens/github.png' /><p>Github</p></a></li>
              <li className='iconnavs'><a href="#section1"><img src='imagens/linkedin.png' /><p> Linkedin</p></a></li>
              <li className='iconnavs'><a href="#section1"><img src='imagens/e-mail.png' /><p>E-mail</p></a></li>
            </div>
          </ul>
        </nav>

      </div>
      <header>
        <div className='fundo'>

          <div className='borda'>
            <img src='/imagens/foto.jpg' />
          </div>

          <h2>Giovanna Eleodora Beraldo</h2>

        </div>
        <div className='sobre'>
          <p>Welcome to my digital garden where I share what
            I'm learning about <br></br>shipping great products, becoming a better developer and growing a career in tech.</p>
        </div>

        <div className='icones'>
          <a href='https://github.com/Giovannabe' target='_blank'><img src='/imagens/github.png' /></a>
          <a href='https://github.com/Giovannabe' target='_blank'><img src='/imagens/linkedin.png' /></a>
          <a href='https://github.com/Giovannabe' target='_blank'><img src='/imagens/e-mail.png' /></a>

        </div>
      </header>

      <div className='todos'>
        <div className='primeirocont'>
          <h2>My first project</h2>
        </div>
      </div>

      <div className='todos'>
        <div className='primeirocont'>
          <h2>My first project</h2>
        </div>
      </div>

      <div className='todos'>
        <div className='primeirocont'>
          <h2>My first project</h2>
        </div>
      </div>

      <footer>
        <p>Made by Giovannabe</p>
      </footer>
    </xu>
  );

}
export default App;
