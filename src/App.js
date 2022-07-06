import React from 'react';

import './App.scss';

import { About, Skills, Footer, Header, Work } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
