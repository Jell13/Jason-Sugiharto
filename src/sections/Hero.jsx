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
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: false,
                id: "hero-trigger"
            }
        })

        tl.to(heroContainerRef.current, {
            opacity: 0,
            y: -100,
            ease: "power2.inOut"
        })
    }, { scope: heroRef })

    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //     const heroSection = heroRef.current;
    //     const heroContent = heroContainerRef.current;

    //     gsap.to(heroContent, {
    //         scrollTrigger: {
    //         trigger: heroSection,
    //         start: "top top",
    //         end: "bottom top",
    //         scrub: true,
    //         markers: false,
    //         id: "hero-trigger",
    //         },
    //         opacity: 0,
    //         y: -100,
    //         ease: "power2.inOut",
    //     });
    //     }, heroRef);

    //     return () => {
    //     ctx.revert(); // This reverts only what's created in this component
    //     };
    // }, [])

  return (
    <>
        <section ref={heroRef} className='h-screen z-[-1] pb-10 pt-20 md:pt-0 text-secondary font-libre'>
            <div ref={heroContainerRef} className='w-full h-full flex justify-center items-center px-10'>
                <div className='w-full flex flex-col items-center justify-center gap-3 mt-20'>
                    <div className='leading-normal'>
                        <span>
                            <h1 className='xl:text-[8rem] lg:text-[6rem] md:text-[5rem] sm:text-[3rem] text-[3rem] font-pop tracking-tighter mt-6 text-secondary font-medium leading-none md:leading-normal'>
                                JASON SUGIHARTO
                            </h1>
                        </span>
                    </div>
                    <div className='w-full md:mt-10 relative grid md:grid-cols-12 grid-cols-6 justify-between items-center'>
                        <div className='flex col-span-4 flex-col justify-center items-center'>
                            <div className='md:w-[30ch]'>
                                <p className='lg:text-lg text-md text-third tracking-tighter'>Crafting sleek, responsive front-end experiences that turn ideas into interactive, user-friendly interfaces. Every pixel matters, and every line of code drives results.</p>
                            </div>
                        </div>
                        <div className='md:col-span-4 col-span-3 flex justify-center md:items-start items-center md:rounded-xl'>
                            <img src="./myhero.png" alt="" className='object-contain h-[250px] bg-inherit rounded-xl'/>
                        </div>
                        <div className='flex flex-col items-end md:col-span-4 col-span-3 col-start- justify-end'>
                            <div className=''>
                                <p className='text-fourth'>Available for work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero