import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

const LenisProvider = ({children}) => {

    const lenis = useLenis((lenis) => {
        // called every scroll
        console.log(lenis)
    })

  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}

export default LenisProvider