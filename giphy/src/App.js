import React from 'react';
import logo from './giphy.png';

import GiphyData from './GiphySearch';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />&nbsp;GIPHY&nbsp;
      </header>
      <section>
        <GiphyData />
      </section>
    </div>
  );
}

export default App;
