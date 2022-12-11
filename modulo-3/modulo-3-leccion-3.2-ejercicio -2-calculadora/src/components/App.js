import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operator, setOperator] = useState('+');


  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);

  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);

  };
  const renderTotal = () => {
    if (operator === '+') {
      return (parseInt(numberA) + parseInt(numberA));
    } else if (operator === '-') {
      return (parseInt(numberA) - parseInt(numberA));
    } else if (operator === '*') {
      return (parseInt(numberA) * parseInt(numberA));
    } else if (operator === '/') {
      return (parseInt(numberA) / parseInt(numberA));
    }
  }

  const changeOperator = (ev) => {
    setOperator(ev.target.value)

  }

  return (
    <div className='App'>
      <h1>Calculadora</h1>
      <form>
        <select name="operacion" id="operacion" onChange={changeOperator}>
          <option value="+">Sumar</option>
          <option value="-">Restar</option>
          <option value="*">Multiplicar</option>
          <option value="/">Dividir</option>
        </select>
        <label>
          Escribe un número:
          <input type='number' name='numberA' onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type='number' name='numberB' onChange={handleNumberB} />
        </label>
      </form>
      <p>
        La operación de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {renderTotal()}</strong>.
      </p>
    </div>
  );
}

export default App;
