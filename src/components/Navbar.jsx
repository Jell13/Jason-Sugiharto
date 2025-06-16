"use client"

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NavBar = () => {

  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if(window.scrollY >= window.innerHeight){
      setIsScrolling(true)
      console.log("The other shows up")
    }
    else{
      setIsScrolling(false)
      console.log("Fixed shows up")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {isScrolling ? <NavBarScroll/> : <NavBarFixed/>}
    </>
  )
}

export default NavBar

function NavBarFixed () {

  const headerRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(headerRef.current, { 
      opacity: 0, 
      y: -50 
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.inOut", // Same easing as hero
      delay: 0.5 // Adjust timing as needed
    });
  })
  
  const links = [
      {
          id: 1,
          name: "Services",
          link: "#services"
      },
      {
          id: 2,
          name: "Works",
          link: "#works"
      },
      {
          id: 3,
          name: "About",
          link: "#about"
      },
      {
          id: 4,
          name: "Contact",
          link: "#contact"
      }
  ]

  return (
    <header ref={headerRef} className='w-full font-libre absolute py-8  md:px-10 px-4 flex inset-x-0 z-10 justify-between items-center text-third'>
      <div className='flex flex-col md:flex-row md:gap-7 md:items-center'>
        <div className='flex items-center'>
        <span>&#169;</span><p className='text-lg font-semibold tracking-tighter text-secondary'>Code By Jason</p>
        </div>
        <p className='opacity-85 tracking-tighter'>(Web & Software Developer)</p>
      </div>
      <nav className='flex md:flex-row flex-col md:gap-5'>
        {links.map(({id, name, link}) => (
            <a 
            className='relative group'
            key={id} href={link}>
                {name}
                <span className='border-b-2 absolute border-third w-0 duration-300 group-hover:w-full left-0'>&nbsp;</span>
            </a>
        ))}
      </nav>
    </header>
  )
}

function NavBarScroll () {

  const[active, setActive] = useState(false);
  const[linkVisible, setLinkVisible] = useState(false);

  const buttonRef = useRef();
  const containerRef = useRef();
  const linkRef = useRef();
  linkRef.current = [];

  const addToRefs = (el) => {
    if(el && !linkRef.current.includes(el)){
      linkRef.current.push(el);
    }
  }

  useGSAP(() => {
    const buttonT1 = gsap.timeline({defaults: {ease: "power4.out"}})
    const masterT2 = gsap.timeline({defaults: {ease: "power3.out"}})


    buttonT1.fromTo(buttonRef.current, 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.6 }
    )
  }, [])

  useGSAP(() => {
    const masterT1 = gsap.timeline({defaults: {ease: "power2.out"}})

    if (active) {
      // Opening animation
      masterT1.fromTo(containerRef.current, 
        { x: "100%", opacity: 1},
        { x: "0%", duration: 1.2, ease: "power1.out"}
      );

      // Stagger animation for links
      masterT1.fromTo(linkRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.7 },
        "-=0.2" // Slight overlap with previous animation
      );
    }
    else{
      // Closing animation
      if(containerRef.current){
        gsap.to(containerRef.current, 
          {
            x: "100%",
            duration: 0.5,
            ease: "power1.in"
          }
        )
      }
    }
  }, { dependencies: [active] })
  const links = [
    {
        id: 1,
        name: "HOME",
        link: "#home"
    },
    {
        id: 2,
        name: "SERVICES",
        link: "#services"
    },
    {
        id: 3,
        name: "WORKS",
        link: "#works"
    },
    {
        id: 4,
        name: "ABOUT",
        link: "#about"
    },
    {
        id: 5,
        name: "CONTACT",
        link: "#contact"
    }
];

  
  return (
    <>
      <button
      ref={buttonRef}
      onClick={() => setActive(!active)}
      className='text-black text-xl z-50 fixed flex flex-col justify-center items-center md:right-7 right-4 top-7 rounded-full size-16 bg-primary hover:scale-90'>
        <span className={`w-7 h-[2px] bg-secondary absolute rounded-full ${active ? "translate-y-0 rotate-45": "-translate-y-1 rotate-0"} duration-300`}></span>
        <span className={`w-7 h-[2px] bg-secondary absolute rounded-full ${active ? "translate-y-0 -rotate-45": "translate-y-1 rotate-0"} duration-300`}></span>
      </button>
      {active && 
      <div
      ref={containerRef}
      style={{ transform: 'translateX(100%)' }}
      className='w-full h-screen fixed top-0 left-0 z-30 justify-end duration-300'>
        <div className='w-full h-screen flex justify-end'>
          <div className='w-[36em] lg:max-w-3xl flex flex-col justify-end bg-fourth'>
            <div></div>
            <nav className='relative w-full h-full px-10 leading-tight flex flex-col mt-20'>
              {links.map(links => (
                <li 
                ref={addToRefs}
                key={links.id} className='text-[4rem] text-primary font-medium group relative flex w-fit gap-4 cursor-pointer items-center'>
                  <span className='w-3 h-3 absolute invisible opacity-0 bg-primary rounded-full group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-0 duration-300'></span>
                  <a href={links.link} onClick={() => setActive(false)} className='group-hover:translate-x-7 duration-700 ease-out'>
                    {links.name}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>}
    </>
  )
}
