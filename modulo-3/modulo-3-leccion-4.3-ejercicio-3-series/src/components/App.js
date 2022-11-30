import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [series, setSeries] = useState([
    { id: '123', name: 'Juego de tronos' },
    { id: '456', name: 'Las chicas Gilmore' },
    { id: '678', name: 'Gambito de Dama' },
  ]);
  const [favorites, setFavorites] = useState([])
  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const searchInFavorite = favorites.find((eachFavorite) => eachFavorite.id === clickedSerieId);

    if (typeof searchInFavorite === 'undefined') {
      const foundSerie = series.find((serie) => serie.id === clickedSerieId);
      //foundSerie.isFavorite = !foundSerie.isFavorite;
      setFavorites([...favorites, foundSerie]);
    } else {
      console.log(clickedSerieId)
      const searchIndexFavorite = favorites.findIndex((eachFavorite) => eachFavorite.id === clickedSerieId);
      console.log(searchIndexFavorite);
      setFavorites([...favorites.splice(searchIndexFavorite, 1)])
      //no me funciona bien el splice
    }

  };
  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };
  // Funciones de renderizado

  const renderSeries = () => {
    return (
      series
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Filtramos por favorita
        .filter((serie) => {
          if (searchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        // Mapeamos
        .map((serie) => {
          return (
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
            </li>
          );
        })
    );
  };

  return (
    <div className='App'>
      <h1>Lista de series:</h1>
      <ul>{renderSeries()}</ul>
      <form>
        <label htmlFor="searchName">Buscar por nombre</label>
        <input type="text" id='searchName' value={searchName} onChange={handleSearchName} />
        <label htmlFor="searchIsFavorite">Mostrar sólo las favoritas</label>
        <input type="checkbox" id='searchIsFavorite' checked={searchIsFavorite} onChange={handleSearchIsFavorite} />
      </form>
    </div>
  );
}

export default App;
