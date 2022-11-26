import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  const [userSearch, setUserSearch] = useState('');
  const [dataSeries, setDataSeries] = useState({});

  const handleInput = (ev) => {
    setUserSearch(ev.target.value)
  };
  useEffect(() => {
    callToApi(userSearch).then((response) => {
      setDataSeries(response);
    });
  }, [userSearch]);//Si queremos llamar al servicio del API solo la primera vez ponemos un array vacío como segundo parámetro del useEffect

  const renderResult = () => {
    if (dataSeries.length > 0) {
      return dataSeries.map((each) => {
        return <li key={each.id}>{each.name}</li>
      })
    }
  }
  return (
    <div className='App'>
      <h1>busca tu serie</h1>
      <input type="text" id='search' name='search' onChange={handleInput} value={userSearch} />
      <ul>
        {renderResult()}
      </ul>
    </div>
  );
}

export default App;
