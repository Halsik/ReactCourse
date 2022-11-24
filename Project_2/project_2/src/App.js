import React from "react"
import "./app.css"
import Info from "./Components/Info/Info"
import About from "./Components/about/About"
import Footer from "./Components/footer/Footer"


function App() {
  return(
    <div className="container">
        <Info />
        <About />
        <Footer />
    </div>
  )
}

export default App