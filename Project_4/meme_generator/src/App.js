import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Challange from './challanges/Challange';


function App() {
  return (
    // Challanges
    // <div className='challange-container'>
    //   <Challange />
    // </div>

    // MEME GENERATOR

    <div className='app-container'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
