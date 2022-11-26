import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card'
import Challanges from './components/challanges/challanges'

function App() {
  return (
   <div className='app-container'>
      <Challanges />
      {/* <Navbar />
      <Hero />
      <Card /> */}
   </div>
  );
}

export default App;
