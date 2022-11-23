import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [CebollaText, setCebollaText] = useState('');
  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handleTortilla = (event) => {
    if (event.target.name === 'huevos' && event.target.checked) {
      setHuevos(true)
    } else if (event.target.name === 'patatas' && event.target.checked) {
      setPatatas(true)
    } else if (event.target.name === 'cebolla' && event.target.checked) {
      setCebolla(true)
    } else if (patatas && huevos && cebolla) {
      setCebollaText('eres una persona concebollista')
    } else {
      setCebollaText('eres un robot sin paladar')
    }
  }


  return (
    <div className='App'>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor="macarrones">Macarrones</label><input type="checkbox" name='macarrones' id='macarrones' onChange={handleTortilla} />
        <label htmlFor="patatas">Patatas</label><input type="checkbox" name='patatas' id='patatas' onChange={handleTortilla} />
        <label htmlFor="nueces">Nueces</label><input type="checkbox" name='nueces' id='nueces' onChange={handleTortilla} />
        <label htmlFor="huevos">Huevos</label><input type="checkbox" name='huevos' id='huevos' onChange={handleTortilla} />
        <label htmlFor="cebolla">Cebolla</label><input type="checkbox" name='cebolla' id='cebolla' onChange={handleTortilla} />
        <label htmlFor="cerveza">Cerveza</label><input type="checkbox" name='cerveza' id='cerveza' onChange={handleTortilla} />
        <p>{CebollaText}</p>
      </form>
    </div>
  );
}

export default App;
