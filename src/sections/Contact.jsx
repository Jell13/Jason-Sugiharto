import React from 'react'
import { LuArrowDownRight } from 'react-icons/lu'

const Contact = () => {

    const words = [
      "LET'S",
      "MAKE",
      "IT",
      "HAPPEN"
    ]
  return (
    <section id="contact" className='md:px-12 py-20 px-6 h-screen mt-20 font-libre'>
        <div className='flex flex-col'>
            <h2 className='font-medium text-secondary font-prompt xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]'>
                <span>CONTACT ME</span>
            </h2>
            <div className='relative flex flex-col justify-center items-center h-full rounded-md bg-secondary text-primary'>
                <div className='flex h-fit flex-col justify-center items-center py-20 gap-8'>
                  <h2 className='uppercase max-w-[10ch] lg:text-[3rem] md:text-[2rem] text-[2rem] text-center font-semibold leading-tight'>
                    {words.map((w, i) => (
                      <span className='relative inline-block' key={i}>
                        {w}
                        &nbsp;
                      </span>
                    ))}
                  </h2>
                  <button className='flex justify-center items-center gap-2 rounded-xl text-lg font-medium hover:scale-90 duration-300 bg-fourth text-primary px-2 py-2'>
                    MESSAGE ME<LuArrowDownRight/>
                  </button>
                </div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default Contact