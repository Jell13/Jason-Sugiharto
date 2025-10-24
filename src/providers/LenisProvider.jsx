import React from 'react'
import { ReactLenis } from 'lenis/react'

const LenisProvider = ({children}) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.2, 
        smoothWheel: true,
        smoothTouch: false,
        normalizeWheel: true
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisProvider