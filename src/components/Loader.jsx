import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Loader = ({onComplete}) => {
  const loaderRef = useRef(null);

  useGSAP(() => {
      const loader = loaderRef.current;

      // Animation timeline
      const tl = gsap.timeline({
      onComplete: () => onComplete() // Callback when animation completes
      });

      // Slide up animation
      tl.to(loader, {
      // scaleY: 0,
      yPercent: -100,
      // transformOrigin: "top",
      duration: 2,
      ease: "power3.inOut"
      });
  }, [onComplete]);

  return (
    <div 
    ref={loaderRef}
    className="fixed top-0 left-0 w-screen h-full bg-black z-20"
    >
      <div className='relative w-full h-full'>
        <img src="./logo-w.svg" alt="" className='md:w-[200px] w-[100px] absolute right-10 bottom-10'/>
      </div>
    </div>
  )
}

export default Loader