import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    console.log(ev.key);
  };
  return (
    <div className='App'>
      <form onSubmit={(ev) => { ev.preventDefault(); }}>{/*para que no se refresque la página al darle al intro */}
        <label htmlFor='name'></label>
        <input
          type='text'
          placeholder='Introduce tu nombre'
          onKeyUp={handleInput}
        />
      </form>
    </div>
  );
}

export default App;

