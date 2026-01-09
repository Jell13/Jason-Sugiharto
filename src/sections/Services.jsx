// import React, { useState } from "react";

// const Services = () => {
//     const [activeService, setActiveService] = useState(null);
    // const services = [
    //     {
    //         id: 3,
    //         number: "(01)",
    //         title: "SWE",
    //         description:
    //             "I specialize in software engineering, turning innovative ideas into reality through coding. By exploring and refining concepts, I build solutions that showcase my problem-solving skills, demonstrating their effectiveness in addressing real-world challenges.",
    //         skills: [
    //             "Front-End Development",
    //             "Back-End Development",
    //             "Full Stack",
    //         ],
    //     },
    //     {
    //         id: 1,
    //         number: "(02)",
    //         title: "Web Dev",
    //         description:
    //             "I develop data-driven solutions that address real-world problems by designing applications tailored to meet unmet needs. My focus is not just on building functional tools but on demonstrating their impact and showcasing how they solve practical challenges better than existing alternatives.",
    //         skills: ["NextJs", "TailwindCSS", "React"],
    //     },
    //     {
    //         id: 2,
    //         number: "(03)",
    //         title: "Tutor",
    //         description:
    //             "I'm passionate about tutoring because I enjoy helping others grow and succeed. I excel at breaking down complex concepts into simple, clear explanations, tailoring my teaching style to suit each learner's needs. My flexibility ensures that I can adapt to different learning styles.",
    //         skills: [
    //             "Databases",
    //             "Object Oriented Programming",
    //             "Web Accessibility",
    //         ],
    //     },
    // ];

//     return (
//         <section
//             id="services"
//             className="rounded-t-3xl bg-secondary border-none text-primary font-man"
//         >
//             <div className="flex flex-col md:px-10 py-20 px-6">
//                 <span className="text-primary text-5xl md:text-7xl lg:text-8xl">
//                     <h2 className="inline-block mr-2 text-primary font-medium font-ones">
//                         WHAT I DO /
//                     </h2>
//                 </span>
//                 <div className="w-full text-primary mt-20 flex md:grid grid-cols-12">
//                     <div className="flex gap-20 col-span-7 md:col-start-6 sm:flex-row flex-col">
//                         <h3 className="text-xl text-thin_text font-medium">
//                             (SERVICES)
//                         </h3>
//                         <p className="w-full font-medium leading-relaxed text-xl">
//                             Struggling to understand code, launch projects, or
//                             scale your skills? I empower you with tailored
//                             solutions, expert guidance, and robust software that
//                             brings your ideas to life and takes your goals to
//                             the next level.
//                         </p>
//                     </div>
//                 </div>

//                 <div className="space-y-0 mt-10">
//                     {services.map((service, index) => (
//                         <div
//                             key={service.id}
//                             className="group border-t border-stone-700 py-12 transition-all duration-500 hover:bg-stone-800/30"
//                             onMouseEnter={() => setActiveService(service.id)}
//                             onMouseLeave={() => setActiveService(null)}
//                             onClick={() =>
//                                 setActiveService(
//                                     activeService === service.id
//                                         ? null
//                                         : service.id
//                                 )
//                             }
//                         >
//                             {/* Main Row */}
//                             <div className="flex flex-col md:flex-row md:items-start justify-center gap-8 md:gap-16">
//                                 {/* Number */}
//                                 <div className="md:w-24 flex-shrink-0 flex items-center">
//                                     <span
//                                         className={`text-6xl md:text-7xl font-bold text-stone-600 group-hover:text-amber-400 transition-colors duration-500 ${
//                                             activeService === service.id &&
//                                             "text-amber-400 transition-colors"
//                                         }`}
//                                     >
//                                         {service.number}
//                                     </span>
//                                 </div>

//                                 {/* Title */}
//                                 <div className="flex-1">
//                                     <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-500 group-hover:translate-x-4">
//                                         <span className="bg-gradient-to-r from-stone-200 to-stone-400 group-hover:from-amber-400 group-hover:to-amber-200 bg-clip-text text-transparent transition-all duration-500">
//                                             {service.title}
//                                         </span>
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* Description & Skills - Revealed on hover */}
//                             <div
//                                 className={`grid transition-all duration-500 overflow-hidden ${
//                                     activeService === service.id
//                                         ? "grid-rows-[1fr] opacity-100 mt-8"
//                                         : "grid-rows-[0fr] opacity-0"
//                                 }`}
//                             >
//                                 <div className="overflow-hidden">
//                                     <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:pl-40">
//                                         {/* Description */}
//                                         <div className="flex-1">
//                                             <p className="text-stone-300 text-lg leading-relaxed">
//                                                 {service.description}
//                                             </p>
//                                         </div>

//                                         {/* Skills */}
//                                         <div className="md:w-80 flex-shrink-0">
//                                             <div className="space-y-2">
//                                                 {service.skills.map(
//                                                     (skill, idx) => (
//                                                         <div
//                                                             key={idx}
//                                                             className="text-stone-400 text-sm flex items-center gap-3 transition-all duration-300"
//                                                             style={{
//                                                                 transitionDelay: `${
//                                                                     idx * 100
//                                                                 }ms`,
//                                                             }}
//                                                         >
//                                                             <div className="w-12 h-px bg-amber-400"></div>
//                                                             <span>{skill}</span>
//                                                         </div>
//                                                     )
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;

import React, { useState } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
        {
            id: 3,
            number: "(01)",
            title: "SWE",
            description:
                "I specialize in software engineering, turning innovative ideas into reality through coding. By exploring and refining concepts, I build solutions that showcase my problem-solving skills, demonstrating their effectiveness in addressing real-world challenges.",
            skills: [
                "Front-End Development",
                "Back-End Development",
                "Full Stack",
            ],
        },
        {
            id: 1,
            number: "(02)",
            title: "Web Dev",
            description:
                "I develop data-driven solutions that address real-world problems by designing applications tailored to meet unmet needs. My focus is not just on building functional tools but on demonstrating their impact and showcasing how they solve practical challenges better than existing alternatives.",
            skills: ["NextJs", "TailwindCSS", "React"],
        },
        {
            id: 2,
            number: "(03)",
            title: "Tutor",
            description:
                "I'm passionate about tutoring because I enjoy helping others grow and succeed. I excel at breaking down complex concepts into simple, clear explanations, tailoring my teaching style to suit each learner's needs. My flexibility ensures that I can adapt to different learning styles.",
            skills: [
                "Databases",
                "Object Oriented Programming",
                "Web Accessibility",
            ],
        },
    ];

  const handleServiceClick = (serviceId) => {
    // Toggle: if clicking the same service, close it; otherwise open the new one
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <section id='services' className='rounded-t-3xl bg-secondary border-none text-stone-200 font-man'>
      <div className='flex flex-col md:px-10 py-20 px-6'>
        {/* Header Section */}
        <div className='mb-20'>
          <span className='text-stone-200 text-5xl md:text-7xl lg:text-8xl'>
            <h2 className='inline-block mr-2 font-bold font-ones'>WHAT I DO /</h2>
          </span>
        </div>

        {/* Intro Text */}
        <div className='w-full text-stone-200 mb-32 flex md:grid grid-cols-12'>
          <div className='flex gap-20 col-span-7 md:col-start-6 sm:flex-row flex-col'>
            <h3 className='text-xl text-stone-400 font-medium'>(SERVICES)</h3>
            <p className='w-full font-medium leading-relaxed text-xl'>
              Struggling to understand code, launch projects, or scale your skills? I empower you with tailored solutions, expert guidance, and robust software that brings your ideas to life and takes your goals to the next level.
            </p>
          </div>
        </div>

        {/* Services List - Large Typography Style */}
        <div className='space-y-0'>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className='group border-t border-stone-700 py-12 transition-all duration-500 md:hover:bg-stone-800/30 cursor-pointer'
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Main Row */}
              <div className='flex flex-col md:flex-row md:items-start gap-8 md:gap-16'>
                {/* Number */}
                <div className='md:w-24 flex-shrink-0'>
                  <span className={`text-6xl md:text-7xl font-medium transition-colors duration-500 ${
                    activeService === service.id ? 'text-amber-400' : 'text-stone-600'
                  } md:group-hover:text-amber-400`}>
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className='flex-1'>
                  <h3 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-500 md:group-hover:translate-x-4 ${
                    activeService === service.id ? 'translate-x-4' : ''
                  }`}>
                    <span className={`bg-gradient-to-r transition-all duration-500 bg-clip-text text-transparent ${
                      activeService === service.id 
                        ? 'from-amber-400 to-amber-200' 
                        : 'from-stone-200 to-stone-400'
                    } md:group-hover:from-amber-400 md:group-hover:to-amber-200`}>
                      {service.title}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Description & Skills - Revealed on hover/click */}
              <div className={`grid transition-all duration-500 overflow-hidden ${
                activeService === service.id ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'
              }`}>
                <div className='overflow-hidden'>
                  <div className='flex flex-col md:flex-row gap-8 md:gap-16 md:pl-40'>
                    {/* Description */}
                    <div className='flex-1'>
                      <p className='text-stone-300 text-lg leading-relaxed'>
                        {service.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className='md:w-80 flex-shrink-0'>
                      <div className='space-y-2'>
                        {service.skills.map((skill, idx) => (
                          <div 
                            key={idx}
                            className='text-stone-400 text-sm flex items-center gap-3 transition-all duration-300'
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className='w-12 h-px bg-amber-400'></div>
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className='border-t border-stone-700 mt-0'></div>
      </div>
    </section>
  )
}

export default Services