import { useRef, useState } from "react"
import { ReactLenis, useLenis } from 'lenis/react'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Loader from "./components/Loader";
import Works from "./sections/Works";
import About from "./sections/About";
import Contact from "./sections/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LenisProvider from "./providers/LenisProvider";


function App() {

  const [loading, setLoading] = useState(true);
  const mainContentRef = useRef();

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  const handleAnimationComplete = () => {
    setLoading(false);
  }

  useGSAP(() => {
    if (!loading) {
      // Set initial state - invisible
      gsap.set(mainContentRef.current, { 
        opacity: 0,
        y: 30
      });

      // Animate in
      gsap.to(mainContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2 // Small delay after loader disappears
      });
    }
  }, [loading])

  return (
    <>
      <div className="grainy">
        {loading && <Loader onComplete={handleAnimationComplete}/>}
        {!loading && <Navbar/>}
        <div ref={mainContentRef} style={{ opacity: loading ? 0 : 1 }}>
          <LenisProvider>
            <Hero/>
            <Services/>
            <Works/>
            <About/>
            <Contact/>
          </LenisProvider>
        </div>
      </div>
    </>
  )
}

export default App
