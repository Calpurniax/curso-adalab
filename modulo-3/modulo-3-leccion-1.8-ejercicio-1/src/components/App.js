import '../styles/App.scss';
import logo from '../images/logo-adalab.png';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1 className='header__title'>
          <a href='./index.html'> Pillow Heads</a>
        </h1>
        <nav className='header__nav'>
          <ul className='header__nav--list'>
            <li className='nav__list-item'>
              <a href='./index.html#equipo'>Equipo</a>
            </li>
            <li className='nav__list-item'>
              <a href='./index.html#quienes'>Quiénes somos</a>
            </li>
            <li className='nav__list-item'>
              <a href='./contact.html'>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='hero'>
          <div className='hero__div'>
            <p className='slogan'>
              No hay código que se resista a una buena almohada.
            </p>
          </div>
        </section>
        <section className='team__section' id='equipo'>
          <article className='team'>
            <h2 className='text-style-5 team-title'>Equipo</h2>
            <p className='text-team1'>
              <span className='italic'>
                ¿Qué os llevarías a una isla desierta? Una almohada.
              </span>{' '}
              Una pregunta y una respuesta que rompieron el hielo y nos sacaron
              una carcajada a los 5 minutos de conocernos. En un momento lleno
              de nervios, nos unimos y buscamos apoyo unas en otras. Un apoyo
              que a día de hoy se mantiene.
            </p>
            <p className='text-team2'>
              Personas diferentes con vidas y recorridos muy distintos, pero a
              las que nos une las mismas ganas de reinventarnos, de crecer y de
              conseguir hacer de la programación nuestro futuro. En definitiva,
              cuatro mujeres que anhelaban sus almohadas a las ocho de la
              mañana.
            </p>
          </article>
          <div className='square'></div>
          <article className='skills'>
            <article className='skills__strength'>
              <h3 className='skills__title'>Fortalezas</h3>
              <p className='skills__text'>
                Desde el primer momento destacó nuestra predisposición a
                trabajar en equipo, ya que siempre ha habido una muy buena
                comunicación entre nosotras y compartíamos las ganas, la
                motivación y el esfuerzo para sacar el proyecto adelante.
              </p>
            </article>

            <article className='skills__weakness'>
              <h3 className='skills__title'>Debilidades</h3>
              <p className='skills__text'>
                Un cambio siempre conlleva un riesgo; y el nuestro es
                enfrentarnos a un sector en el que no tenemos experiencia
                previa, pero gracias a la manera en la que nos complementamos,
                siempre hemos podido solucionar las trabas que nos hemos
                encontrado en el camino.
              </p>
            </article>
          </article>
        </section>
      </main>
      <footer className='footer'>
        <h4 className='footer__title'>Pillow Heads © 2022</h4>
        <ul className='footer__links'>
          <li className='footer__links--li'>
            <a href='./index.html#equipo'>Equipo</a>
          </li>
          <li className='footer__links--li'>
            <a href='./index.html#quienes'>Quiénes somos</a>
          </li>
          <li className='footer__links--li'>
            <a href='./contact.html'>Contacto</a>
          </li>
        </ul>

        <img src={logo} alt='Logo Adalab' className='logo-adalab' />
      </footer>
    </div>
  );
}

export default App;
