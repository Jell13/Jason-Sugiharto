import React from "react";

const Works = () => {
    const projects = [
        {
            id: 1,
            number: "01",
            title: "LiveDocs",
            subtitle: "Workspace Collaborator",
            category: "Productivity | Collaboration",
            year: "2024",
            image: "https://www.lifewire.com/thmb/Uqi3NYSBuoCojLl65_it-e5NmVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/keyboard-light-up-razer-gaming-2b6aa4b392184326925211f0cae4d6b9.jpg",
            link: "#", // Changed from empty string to "#" for demo
        },
        {
            id: 2,
            number: "02",
            title: "Project Two",
            subtitle: "Digital Experience",
            category: "Web Development | Design",
            year: "2024",
            image: "https://preview.redd.it/pkvfv2b209i61.jpg?width=4032&format=pjpg&auto=webp&s=f8a961144201dff925b7ec7ec3d3d4d09d10a338",
            link: "#",
        },
        {
            id: 3,
            number: "03",
            title: "Project Three",
            subtitle: "Innovation Platform",
            category: "Full Stack | API",
            year: "2024",
            image: "https://i.redd.it/xlwemhje70i81.jpg",
            link: "#",
        },
    ];

    return (
        <section
            id="works"
            className="text-primary relative bg-secondary border-none -mt-1 font-man"
        >
            <div className="w-full md:px-10 px-6 flex flex-col">
                <h2 className="text-primary xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]">
                    <span className="inline-block mr-2 text-primary font-bold font-ones">
                        MY SELECTED WORKS /
                    </span>
                </h2>
                <div className="w-full text-primary mt-20 flex md:grid grid-cols-12">
                    <div className="flex gap-20 col-span-7 md:col-start-6 sm:flex-row flex-col">
                        <h3 className="text-thin_text font-medium text-xl">
                            (WORKS)
                        </h3>
                        <p className="md:w-[30ch] font-medium leading-relaxed text-xl">
                            Featured projects that have been meticulously
                            crafted with passion to drive results and impact
                        </p>
                    </div>
                </div>
                <div className="space-y-32 mt-20">
                    {projects.map((project, index) => (
                        <a
                            href={project.link}
                            key={project.id}
                            className="block group"
                        >
                            <div
                                className={`flex flex-col ${
                                    index % 2 === 0
                                        ? "lg:flex-row"
                                        : "lg:flex-row-reverse"
                                } gap-12 items-start relative no-underline`}
                            >
                                {/* Image Container */}
                                <div className="lg:w-1/2 w-full relative overflow-hidden rounded-2xl bg-stone-800">
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        />
                                        {/* Overlay gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-stone-900/90 backdrop-blur-sm flex items-center justify-center border border-stone-700 transition-all duration-500 group-hover:scale-110 group-hover:border-amber-400/50">
                                        <span className="text-2xl font-bold text-stone-400 transition-colors duration-500 group-hover:text-amber-400">
                                            {project.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-stone-400 text-sm tracking-widest uppercase transition-colors duration-500 group-hover:text-stone-300">
                                            {project.category}
                                        </span>
                                        <span className="text-stone-600 transition-colors duration-500 group-hover:text-amber-400">
                                            •
                                        </span>
                                        <div className="border border-stone-700 bg-stone-800 rounded-lg text-stone-400 px-3 py-1 text-sm transition-all duration-500 group-hover:border-amber-400/50 group-hover:text-amber-400">
                                            {project.year}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-5xl md:text-6xl font-bold mb-3 transition-all duration-500 group-hover:text-amber-400 text-stone-200 group-hover:translate-x-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-2xl text-stone-400 transition-colors duration-500 group-hover:text-stone-300">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    {/* Animated underline */}
                                    <div className="h-1 bg-gradient-to-r from-amber-500 to-transparent transition-all duration-700 group-hover:w-32 group-hover:from-amber-400 w-16"></div>

                                    {/* Optional: Keep a subtle CTA indicator */}
                                    {/* <div className="flex items-center gap-2 text-stone-500 transition-all duration-500 group-hover:text-amber-400 group-hover:translate-x-2">
                                    <span className="text-lg font-medium">View case study</span>
                                    <svg
                                        className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div> */}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
