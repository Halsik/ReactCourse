import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import cityData from './components/data'


function App() {

  const newData = cityData.map(place => {
    return(
      <Hero
        key={place.id} 
        place={place}
      />
    )
  })
  return (
    <div className='app-container'>
      <Navbar />
      {newData}
    </div>
  );
}

export default App;
