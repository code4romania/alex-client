import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion'
import DropdownMenu from './components/DropdownMenu'
import Modal from './components/Modal'
// import DropdownMenu from './components/DropdownMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <DropdownMenu />
          <Modal />
        </div>
        <div style={{marginBottom: 20}}>
        </div>
        <div>
          <Accordion />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
