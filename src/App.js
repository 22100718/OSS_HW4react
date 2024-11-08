import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.js';
import Component1 from './Component1.js';
import Component2 from './Component2.js';
import Component3 from './Component3.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Component1/>
        <Component2/>
        <Component3/>
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
