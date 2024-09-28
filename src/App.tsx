import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const clicked = () => {
  throw new Error("Something went wrong")
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={clicked}> Error Out </button>
      </header>
    </div>
  );
}

export default App;
