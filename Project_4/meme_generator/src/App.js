import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Challange from './challanges/Challange';


function App() {
  return (
    // Challange
    <div className='challange-container'>
      <Challange 
      darkMode={false}/>
    </div>

    // MEME GENERATOR

    // <div className='app-container'>
    //   <Navbar />
    //   <Hero />
    // </div>
  );
}

export default App;
