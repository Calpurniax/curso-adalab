import '../styles/App.scss';
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter((counter = 0));
  };
  return (
    <div className='App'>
      <p>Contador {counter}</p>
      <button onClick={handleClick}>Incrementa</button>
      <button onClick={handleReset}>Reseta el contador</button>
    </div>
  );
}

export default App;
