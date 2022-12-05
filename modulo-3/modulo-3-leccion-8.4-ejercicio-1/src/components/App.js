import { useState, useEffect } from 'react';
import '../styles/App.scss';
import { fetchProduct } from '../services/api'
import AllProducts from './AllProducts'
import { Routes, Route } from "react-router-dom";
import ProductDetail from './ProductDetail';

function App() {
  const [products, setProducts] = useState([]);
  //llamada a la API
  useEffect(() => {
    fetchProduct().then((data) => {
      setProducts(data.items)
    })
  }, []);
  console.log(products);
  return (
    <div className='App'>
      <h1>Camisetas rechulonas</h1>
      <Routes>
        <Route path='/ProductDetail/:id'
          element={<ProductDetail products={products} />}>
        </Route>
        <Route path='/' element={
          <section className='all'>
            <AllProducts
              products={products} />
          </section>} />
      </Routes>

    </div>
  );
}

export default App;
