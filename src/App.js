import React from 'react';
import './App.css';
import { Header, WhatProomo, Blog, Features, Possibility, Footer } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatProomo />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
