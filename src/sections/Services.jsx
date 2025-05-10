import React from 'react'

const Services = () => {
  return (
    <section id='services' className='rounded-t-3xl bg-secondary border-none text-primary font-libre'>
      <div className='flex flex-col md:px-10 py-20 px-6'>
        <span className='text-primary xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]'>
          <h2 className='inline-block mr-2 text-primary font-medium font-prompt'>WHAT I DO /</h2>
        </span>
        <div className='w-full text-primary mt-20 flex md:grid grid-cols-12'>
          <div className='flex gap-20 col-span-7 md:col-start-6 sm:flex-row flex-col'>
            <h3 className='text-xl text-thin_text font-medium'>(SERVICES)</h3>
            <p className='w-full font-medium leading-relaxed text-xl'>
              Struggling to understand code, launch projects, or scale your skills? I empower you with tailored solutions, expert guidance, and robust software that brings your ideas to life and takes your goals to the next level.
            </p>
          </div>
        </div>
        <div className='w-full pt-8'>
          <div className='mt-4 flex flex-col pt-6 gap-y-16 justify-between'>
             {/* First Service */}
             <div className='sticky top-[20vh] border-t border-t-[#3f3f38] mb-[17.25em] bg-secondary'>
                <div className='flex md:grid grid-cols-12 items-center justify-between pt-10'>
                  <span className='col-span-2 text-4xl font-medium'>
                    (01)
                  </span>
                  <h3 className='col-span-6 col-start-6 md:text-5xl text-4xl font-medium'>
                    Web Dev
                  </h3>
                </div>
                <div className='md:grid flex grid-cols-12'>
                  <div className='w-full flex flex-col gap-6 col-span-7 col-start-6 pt-10'>
                    <p className='text-xl text-thin_text'>I develop data-driven solutions that address real-world problems by designing applications tailored to meet unmet needs. My focus is not just on building functional tools but on demonstrating their impact and showcasing how they solve practical challenges better than existing alternatives.</p>
                    <div className='flex flex-col pt-6 divide-y divide-[#3f3f38] text-xl'>
                      <span>NextJs</span>
                      <span>TailwindCSS</span>
                      <span>React</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Service */}
              <div className='sticky top-[calc(20vh+7.75em)] border-t border-t-[#3f3f38] mb-[11.5em] bg-secondary'>
                <div className='flex md:grid grid-cols-12 items-center justify-between pt-10'>
                  <span className='col-span-2 text-4xl font-medium'>
                    (02)
                  </span>
                  <h3 className='col-span-6 col-start-6 md:text-5xl text-4xl font-medium'>
                    Tutor
                  </h3>
                </div>
                <div className='md:grid flex grid-cols-12'>
                  <div className='w-full flex flex-col gap-6 col-span-7 col-start-6 pt-10'>
                    <p className='text-xl text-thin_text'>I&apos;m passionate about tutoring because I enjoy helping others grow and succeed. I excel at breaking down complex concepts into simple, clear explanations, tailoring my teaching style to suit each learner’s needs. My flexibility ensures that I can adapt to different learning styles.</p>
                    <div className='flex flex-col pt-6 divide-y text-xl divide-[#3f3f38]'>
                      <span>Databases</span>
                      <span>Object Oriented Programming</span>
                      <span>Web Accessibility</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Service */}
              <div className='sticky top-[calc(20vh+11.5em)] border-t border-t-[#3f3f38] mb-[5.75em] bg-secondary'>
                <div className='flex md:grid grid-cols-12 items-center justify-between pt-10'>
                  <span className='col-span-2 text-4xl font-medium'>
                    (03)
                  </span>
                  <h3 className='col-span-6 col-start-6 md:text-5xl text-4xl font-medium'>
                    SWE
                  </h3>
                </div>
                <div className='md:grid flex grid-cols-12'>
                  <div className='w-full flex flex-col gap-6 col-span-7 col-start-6 pt-10'>
                    <p className='text-xl text-thin_text'>I specialize in software engineering, turning innovative ideas into reality through coding. By exploring and refining concepts, I build solutions that showcase my problem-solving skills, demonstrating their effectiveness in addressing real-world challenges.</p>
                    <div className='flex flex-col pt-6 divide-y text-xl divide-[#3f3f38]'>
                      <span>Front-End Development</span>
                      <span>Back-End Development</span>
                      <span>Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services