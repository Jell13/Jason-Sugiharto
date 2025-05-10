import { useState } from "react"
import ReactLenis from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Loader from "./components/Loader";
import Works from "./sections/Works";
import About from "./sections/About";
import Contact from "./sections/Contact";


function App() {

  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    setLoading(false);
  }

  return (
    <>
      <div className="grainy">
        {loading && <Loader onComplete={handleAnimationComplete}/>}
        <ReactLenis root>
          <Navbar/>
          <Hero/>
          <Services/>
          <Works/>
          <About/>
          <Contact/>
        </ReactLenis>
      </div>
    </>
  )
}

export default App
