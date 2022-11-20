import '../styles/App.scss';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <figure className='header__logo'>
          <a href='https://adalab.es/'>Adalab</a>
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
