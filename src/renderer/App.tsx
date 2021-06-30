import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="h-8 bg-transparent" style={{'-webkit-app-region': 'drag'} as any}></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vite + React + Tailwind2 + Typescript + Electron!</p>
        <sub className="pt-3 pb-6 text-gray-400">Eslint + Prettier + Lint-Staged + Husky!</sub>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
