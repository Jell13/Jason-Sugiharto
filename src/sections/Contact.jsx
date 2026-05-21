import React from 'react'

const socials = [
  { id: "(01)", label: "LinkedIn", handle: "Jason Sugiharto", href: "https://www.linkedin.com/in/jason-sugiharto/" },
  { id: "(02)", label: "GitHub",   handle: "Jell13", href: "https://github.com/Jell13" },
  { id: "(03)", label: "Email",    handle: "jasonliesugiharto@email.com", href: "mailto:jasonliesugiharto@email.com" },
]

const Contact = () => {
  return (
    <section id="contact" className="rounded-t-3xl bg-secondary text-stone-200 font-man mt-20">
      <div className="flex flex-col md:px-10 py-20 px-6">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-ones leading-none">
            LET'S WORK<br />TOGETHER /
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">

          {/* Tagline */}
          <p className="text-stone-400 text-lg leading-relaxed max-w-[38ch]">
            Have a project in mind, need a tutor, or just want to connect?
            I'm always open to new opportunities and conversations.
          </p>

          {/* Socials list */}
          <div>
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-stone-700 py-5 transition-all duration-300 hover:pl-4 last:border-b"
              >
                <div className="flex items-center gap-4">
                  <span className="text-stone-600 text-sm font-medium">{s.id}</span>
                  <div>
                    <p className="text-lg font-semibold group-hover:text-amber-400 transition-colors duration-300">
                      {s.label}
                    </p>
                    <p className="text-xs text-stone-500">{s.handle}</p>
                  </div>
                </div>
                <span className="text-stone-600 group-hover:text-amber-400 group-hover:-rotate-45 transition-all duration-300 text-xl">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-stone-700 mt-16 pt-6 flex justify-between items-center text-stone-600 text-xs">
          <span>JASON SUGIHARTO © 2025</span>
          <span>PORTFOLIO</span>
        </div>

      </div>
    </section>
  )
}

export default Contact