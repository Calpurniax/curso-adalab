import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <figure className='header__logo'>
          <a href='https://adalab.es/'>
            <img src={logo} title='Adalab' alt='Logo de Adalab' />
          </a>
        </figure>
        <nav>
          <ul className='nav__links'>
            <li>
              <a href='https://adalab.es/blog/'>Blog</a>
            </li>
            <li>
              <a href='https://adalab.es/contacto/'>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container'>
        <h1 className='title'>Creando Diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
