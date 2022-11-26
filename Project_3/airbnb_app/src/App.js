import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card'
import Challanges from './components/challanges/propsLearn/challanges'
import Jokes from './components/challanges/propsPracticeJokes/Jokes';
import cardImage from "./components/Card/CardImage.jpeg"

function App() {
  return (
   <div className='app-container'>

    {/* props learn practice */}
      {/* <Jokes 
        setup="How does a pirate set up a Bluetooth speaker?"
        punchline="Parrot with his phone"
      />
      <Jokes 
        setup="On the last mission to the moon, NASA set up a restaurant. It didn’t last very long."
        punchline="The food was good, but there was no atmosphere."
      />
      <Jokes 
        setup="God said to set up a router and free Wi-Fi in the tabernacle..."
        punchline="...but Moses is having a little trouble finding the promised LAN."
      />
      <Jokes 
        setup="Did you hear about the two lawyers who set up shop under the old oak tree?"
        punchline="I heard it was a pretty shady business."
      />
  */}
      {/* introduction to props concept 
      
        <Challanges /> 
        
      */}

      <Navbar />
      <Hero />
      <Card 
        name="Katie Zaferes"
        img={cardImage}
        rating="5.0"
        allRatings="(6)"
        country="USA"
        description="Life lessons fith Katie Zaferes"
        cost="136"
      />
   </div>
  );
}

export default App;
