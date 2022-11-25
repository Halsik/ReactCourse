import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card'

function App() {
  return (
   <div className='app-container'>
      <Navbar />
      <Hero />
      <Card />
   </div>
  );
}

export default App;
