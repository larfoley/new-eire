import React from 'react';
import './styles.css';

import Header from './Header';
import Gallery from '../Gallery/index';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <main className="container">
        <Gallery/>
      </main>
    </div>
  );
}

export default App;
