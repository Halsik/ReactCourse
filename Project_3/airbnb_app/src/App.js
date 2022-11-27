import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card'
import Challanges from './components/Challanges/propsLearn/challanges'
import Jokes from './components/Challanges/propsPracticeJokes/Jokes';
import jokesData from './components/Challanges/propsPracticeJokes/jokesData';
import cardData from './components/Card/cardData';

function App() {
      console.log(cardData)
      const cardDetails = cardData.map(details => {
        return(
          <Card 
            img={details.coverImg}
            rating={details.stats.rating}
            allRatings={details.stats.reviewCount}
            country={details.country}
            description={details.title}
            cost={details.price}
      />
        )
      })







          // console.log(jokesData)
          // const allJokes = jokesData.map(joke => {
          //   return (
          //     <Jokes 
          //       setup = {joke.setup}
          //       punchline = {joke.punchline}      
          //     />
          //     )
          //   })
              

  return (
   <div className='app-container'>


      {/* render map of jokes */}
        {/* {allJokes} */}
      {/* introduction to props concept 
      
        <Challanges /> 
        
      */}

      <Navbar />
      <Hero />
      <div className='cards'>
        {cardDetails}
      </div>
   </div>
  );
}

export default App;
