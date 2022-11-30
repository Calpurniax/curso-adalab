import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Repositories from './Repositories';
import Packages from './Packages';
import People from './People';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route
          path='/overview'
          element={<Overview />}
        />
        <Route
          path='/repositories'
          element={<Repositories />}
        />
        <Route
          path='/packages'
          element={<Packages />}
        />
        <Route
          path='/people'
          element={<People />}
        />
        <Route path='*' element={
          <p>esta página no existe</p>
        }
        />
      </Routes>



    </div>
  );
}

export default App;
