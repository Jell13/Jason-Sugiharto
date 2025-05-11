import React from 'react'

const Works = () => {
  return (
    <section id='works' className='text-primary relative bg-secondary border-none -mt-1 font-libre'>
        <div className='w-full md:px-10 px-6 flex flex-col'>
            <h2 className='text-primary xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]'>
                <span className='inline-block mr-2 text-primary font-medium font-prompt'>MY SELECTED WORKS /</span>
            </h2>
            <div className='w-full text-primary mt-20 flex md:grid grid-cols-12'>
                <div className='flex gap-20 col-span-7 md:col-start-6 sm:flex-row flex-col'>
                    <h3 className='text-thin_text font-medium text-xl'>(WORKS)</h3>
                    <p className='md:w-[30ch] font-medium leading-relaxed text-xl'>
                        Featured projects that have been meticulously crafted with passion to drive results and impact
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-12 pt-12 gap-5 mt-10'>
                {/* First project*/}
                <div className='col-span-3 col-start-3 lg:block hidden mb-20'>
                    <div>
                        <span className='text-[12vw] text-thin_text'>01.</span>
                    </div>
                </div>
                <div className='lg:col-span-7 col-span-12 mb-20'>
                    <a href="">
                        <div className='flex justify-center items-center'>
                        <img src="https://www.lifewire.com/thmb/Uqi3NYSBuoCojLl65_it-e5NmVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/keyboard-light-up-razer-gaming-2b6aa4b392184326925211f0cae4d6b9.jpg" alt=""/>
                        <div className='absolute z-10 text-white text-2xl'>
                            Vid of project here
                        </div>
                        </div>
                    </a>
                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            <h5 className='text-2xl text-thin_text'>Productivity | Collaboration</h5>
                            <h4 className='font-medium text-4xl'>Workspace Collaborator | LiveDocs</h4>
                        </div>
                        <div className='flex items-end'>
                            <div className='border-[1px] border-third bg-third rounded-xl text-primary px-2'>2024</div>
                        </div>
                    </div>
                </div>
                {/* <WorkBoxLeft/> */}

                {/* Second project */}
                <div className='lg:col-span-7 col-span-12 flex flex-col gap-8 mb-20'>
                    <a href="">
                        <div className='relative flex justify-center items-center'>
                            <img src="https://preview.redd.it/pkvfv2b209i61.jpg?width=4032&format=pjpg&auto=webp&s=f8a961144201dff925b7ec7ec3d3d4d09d10a338" alt=""/>
                            <div className='absolute z-10 text-white text-2xl'>
                                Vid of project here
                            </div>
                        </div>
                    </a>
                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            <h5 className='text-2xl text-thin_text'>Productivity | Collaboration</h5>
                            <h4 className='font-medium text-4xl'>Workspace Collaborator | LiveDocs</h4>
                        </div>
                        <div className='flex items-end'>
                            <div className='border-[1px] border-third bg-third rounded-xl text-primary px-2'>2024</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 col-start-9 mb-20 lg:block hidden'>
                    <div>
                        <span className='text-[12vw] text-thin_text'>02.</span>
                    </div>
                </div>

                {/* Third project */}
                <div className='col-span-3 col-start-3 lg:block hidden mb-20'>
                    <div>
                        <span className='text-[12vw] text-thin_text'>03.</span>
                    </div>
                </div>
                <div className='lg:col-span-7 col-span-12 mb-20'>
                    <a href="">
                        <div className='relative flex justify-center items-center'>
                            <img src="https://i.redd.it/xlwemhje70i81.jpg" alt=""/>
                            <div className='absolute z-10 text-white text-2xl'>
                                Vid of project here
                            </div>
                        </div>
                    </a>
                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            <h5 className='text-2xl text-thin_text'>Productivity | Collaboration</h5>
                            <h4 className='font-medium text-4xl'>Workspace Collaborator | LiveDocs</h4>
                        </div>
                        <div className='flex items-end'>
                            <div className='border-[1px] border-third bg-third rounded-xl text-primary px-2'>2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works