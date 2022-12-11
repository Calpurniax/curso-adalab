import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';
import Header from './Header'
import Main from './Main';
import { useState } from 'react';


function App() {
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const handleNewTab = () => {
    setOpenInNewTab(!openInNewTab)
  }
  return (
    <div className='App'>
      <Header
        logo={logo}
        openInNewTab={openInNewTab}
        handleNewTab={handleNewTab}
      />
      <Main></Main>
    </div>
  );
}

export default App;
