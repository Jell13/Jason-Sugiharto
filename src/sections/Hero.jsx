// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger)

// const Hero = () => {

//     const heroRef = useRef();
//     const heroContainerRef = useRef();

//     useGSAP(() => {
//         const tl = gsap.timeline({
//             scrollTrigger:{
//                 trigger: "#home",
//                 start: "top top",
//                 end: "bottom top",
//                 scrub: true,
//                 markers: false,
//                 id: "hero-trigger"
//             }
//         })

//         tl.to("#container-hero", {
//             opacity: 0,
//             y: -100,
//             ease: "power2.inOut"
//         })
//     })

//   return (
//     <>
//         <section ref={heroRef} id="home" className='h-screen z-[-1] pb-10 pt-20 md:pt-0 text-secondary font-man'>
//             <div ref={heroContainerRef} id='container-hero' className='w-full h-full flex justify-center items-center px-10'>
//                 <div className='w-full flex flex-col items-center justify-center gap-3 mt-20'>
//                     <div className='leading-normal'>
//                         <span>
//                             <h1 className='xl:text-[8rem] lg:text-[6rem] md:text-[5rem] sm:text-[3rem] text-[3rem] font-ones tracking-tighter mt-6 text-secondary font-medium leading-none md:leading-normal'>
//                                 JASON SUGIHARTO
//                             </h1>
//                         </span>
//                     </div>
//                     <div className='w-full md:mt-10 relative grid md:grid-cols-12 grid-cols-6 justify-between items-center'>
//                         <div className='flex col-span-4 flex-col justify-center items-center'>
//                             <div className='md:w-[30ch]'>
//                                 <p className='lg:text-lg text-md text-third font-man tracking-tighter'>Crafting sleek, responsive front-end experiences that turn ideas into interactive, user-friendly interfaces. Every pixel matters, and every line of code drives results.</p>
//                             </div>
//                         </div>
//                         <div className='md:col-span-4 col-span-3 flex justify-center md:items-start items-center md:rounded-xl'>
//                             <img src="./myhero.png" alt="" className='object-contain h-[250px] bg-inherit rounded-xl'/>
//                         </div>
//                         {/* <div className='flex flex-col items-end md:col-span-4 col-span-3 col-start- justify-end'>
//                             <div className=''>
//                                 <p className='text-fourth'>Full Stack Dev</p>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Hero

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const heroRef = useRef();
    const heroContainerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: false,
                id: "hero-trigger"
            }
        })

        tl.to("#container-hero", {
            opacity: 0,
            y: -100,
            ease: "power2.inOut"
        })
    })

  return (
    <>
        <section ref={heroRef} id="home" className='md:h-screen min-h-screen pb-10 pt-32 md:pt-20 lg:pt-0 text-secondary font-man relative'>
            <div ref={heroContainerRef} id='container-hero' className='w-full h-full flex justify-center items-center md:px-10 px-6'>
                <div className='w-full max-w-7xl mx-auto md:mt-20 mt-10'>
                    
                    {/* Main Name Title */}
                    <div className='text-center mb-12 md:mb-16 lg:mb-20'>
                        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold font-ones tracking-tight text-secondary leading-none'>
                            JASON<br className='md:hidden'/>
                            <span className='hidden md:inline'> </span>
                            SUGIHARTO
                        </h1>
                    </div>

                    {/* Content Grid */}
                    <div className='grid md:grid-cols-12 gap-8 md:gap-12 items-start md:items-center'>
                        
                        {/* Center - Image (First on mobile) */}
                        <div className='md:col-span-4 md:col-start-5 order-1 md:order-2 flex justify-center mb-8 md:mb-0'>
                            <div className='relative'>
                                <div className='w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden'>
                                    <img 
                                        src="./myhero.png" 
                                        alt="Jason Sugiharto" 
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                {/* Decorative element */}
                                <div className='absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-2 border-third rounded-2xl -z-10'></div>
                                <div className='absolute -top-3 -left-3 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-2 border-third rounded-2xl -z-10'></div>
                            </div>
                        </div>

                        {/* Left - Description (Second on mobile) */}
                        <div className='md:col-span-4 md:col-start-1 md:row-start-1 order-2 md:order-1'>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-4 mb-4 md:mb-6'>
                                    <div className='h-px flex-1 bg-third max-w-[40px] md:max-w-[60px]'></div>
                                    <span className='text-xs tracking-widest uppercase text-third font-medium'>(Introduction)</span>
                                </div>
                                <p className='text-base md:text-lg text-third leading-relaxed'>
                                    Crafting sleek, responsive front-end experiences that turn ideas into interactive, user-friendly interfaces. Every pixel matters, and every line of code drives results.
                                </p>
                            </div>
                        </div>

                        {/* Right - Role/Status (Third on mobile) */}
                        <div className='md:col-span-4 md:col-start-9 md:row-start-1 order-3 flex md:justify-end'>
                            <div className='space-y-3'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
                                    <span className='text-xs md:text-sm text-third uppercase tracking-wider'>Currently working</span>
                                </div>
                                <div className='space-y-1'>
                                    <p className='text-xl md:text-2xl font-medium text-secondary'>Full Stack Developer</p>
                                    <p className='text-sm md:text-base text-third'>Based in California, US</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Scroll Indicator */}
                    {/* <div className='hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2'>
                        <span className='text-xs text-third uppercase tracking-widest'>Scroll</span>
                        <div className='w-px h-12 bg-gradient-to-b from-third to-transparent'></div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero