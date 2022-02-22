import React from 'react';
import { About, Footer, Header, Skills, Work } from './containers'
import './App.scss'
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
