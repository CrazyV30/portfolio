import Image from "next/image";

const experiences = [
  {
    period: "12.09.2026 — 19.09.2026",
    title: "QA Engineer",
    company: "HerSmile Shop",
    description:
      "Building modern web applications with Node.js, Vanilla HTML/CSS/JS, ExpressJS and PostgreSQL. Testing and debugging applications to ensure quality and performance.",
    technologies: ["Node.js", "Vanilla HTML/CSS/JS", "PostgreSQL", "ExpressJS"],
  },
  {
    period: "2024 — Present",
    title: "Junior Software Developer",
    company: "IT / Web Development / Desktop Applications",
    description:
      "Developed web applications, worked with databases and APIs, and learned modern software development practices.",
    technologies: ["C/C++", "C#", "JavaScript", "SQLite", "PostgreSQL", "Vanilla HTML/CSS", "Node.js"],
  },
];

const projects = [
  {
    number: "01",
    title: "HerSmile Shop",
    description:
      "A full-stack online makeup and perfume shop with an AI perfume assistant.",
    technologies: ["Node.js", "Vanilla HTML/CSS/JS","ExpressJS", "PostgreSQL"],
    github: "https://github.com/spirytusPDF/HerSmile_shop",
    demo: "https://hersmile.onrender.com",
    image: "/projects/ecommerce.png",
  },
  {
    number: "02",
    title: "AI-Kit",
    description:
      "A lightweight, responsive one-page website made with only HTML and CSS. No JavaScript, libraries, or frameworks — pure vanilla code.",
    technologies: ["Vanilla HTML/CSS"],
    github: "https://github.com/CrazyV30/AI-Kit",
    demo: "https://crazyv30.github.io/AI-Kit/",
    image: "/projects/products.png",
  },
  {
    number: "03",
    title: "Portfolio Website",
    description:
      "A personal portfolio focused on clean design, smooth interactions and a strong visual presentation.",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    github: "#",
    demo: "#",
    image: "/projects/portfolio.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-300">
      <div className="mx-auto flex max-w-7xl flex-col px-6 md:px-10 lg:flex-row lg:px-12">

        {/* ───────────────── LEFT SIDE ───────────────── */}

        <aside className="flex flex-col justify-between py-12 lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:py-20">
          <div>
            <div className="mb-10">
              <p className="mb-3 font-mono text-sm text-violet-400">
                HELLO, I'M
              </p>

              <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                Viktoria Kalnyk
              </h1>

              <h2 className="mt-3 text-xl text-zinc-400">
                Full-Stack Developer/Software Developer
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-500">
                I build modern, accessible and reliable web applications
                with a focus on clean code and thoughtful user experiences.
              </p>
            </div>

            {/* NAVIGATION */}

            <nav className="hidden lg:block">
              <ul className="space-y-5">
                {["about", "experience", "projects", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-zinc-500 transition hover:text-white"
                      >
                        <span className="h-px w-8 bg-zinc-700 transition-all group-hover:w-14 group-hover:bg-violet-400" />

                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* SOCIAL LINKS */}

          <div className="mt-12 flex gap-5">
            <a
              href="https://github.com/CrazyV30"
              className="text-sm text-zinc-500 transition hover:text-violet-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/viktoria-kalnyk/"
              className="text-sm text-zinc-500 transition hover:text-violet-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:viktoria.kalnyk77@gmail.com"
              className="text-sm text-zinc-500 transition hover:text-violet-400"
            >
              Email
            </a>
          </div>
        </aside>

        {/* ───────────────── RIGHT SIDE ───────────────── */}

        <div className="lg:w-[58%] lg:py-20">

          {/* ABOUT */}

          <section
            id="about"
            className="scroll-mt-20 py-12 lg:py-0"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-violet-400 lg:hidden">
              About
            </p>

            <div className="space-y-5 text-[16px] leading-8 text-zinc-400">
              <p>
                I’m a developer who enjoys turning ideas into functional,
                beautiful digital products. I’m interested in both frontend
                development and backend architecture.
              </p>

              <p>
                My main focus is building applications with{" "}
                <span className="text-zinc-200">
                  C#, JavaScript, Node.js, React and Next.js
                </span>
                , while working with databases and APIs on the backend.
              </p>

              <p>
                I enjoy learning new technologies, solving difficult problems
                and continuously improving the way I write software.
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}

          <section
            id="experience"
            className="mt-28 scroll-mt-20"
          >
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-violet-400 lg:hidden">
              Experience
            </p>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <article
                  key={experience.period}
                  className="group rounded-2xl border border-transparent p-6 transition-all hover:border-zinc-800 hover:bg-zinc-900/60"
                >
                  <div className="grid gap-5 sm:grid-cols-[120px_1fr]">
                    <p className="font-mono text-xs text-zinc-600">
                      {experience.period}
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 transition group-hover:text-violet-400">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm text-violet-400">
                        {experience.company}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-zinc-500">
                        {experience.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ───────────────── PROJECTS ───────────────── */}

          <section
            id="projects"
            className="mt-32 scroll-mt-20"
          >
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
                Selected Projects
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Things I've built
              </h2>
            </div>

            <div className="space-y-20">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group"
                >
                  {/* PROJECT PREVIEW */}

                  <div className="relative mx-auto w-[88%] sm:w-[82%]">
                    <div
                      className="
                        relative
                        aspect-[16/10]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-900
                        shadow-2xl
                        transition-all
                        duration-500
                        group-hover:-translate-y-2
                        group-hover:border-violet-500/40
                        group-hover:shadow-violet-950/20
                      "
                    >
                      {/* Fake browser header */}

                      <div className="absolute left-0 right-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-zinc-800 bg-zinc-950/90 px-4">
                        <span className="h-2 w-2 rounded-full bg-zinc-700" />
                        <span className="h-2 w-2 rounded-full bg-zinc-700" />
                        <span className="h-2 w-2 rounded-full bg-zinc-700" />

                        <div className="ml-4 h-4 flex-1 rounded bg-zinc-900" />
                      </div>

                      {/* IMAGE */}

                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          object-top
                          pt-9
                          transition-transform
                          duration-700
                          group-hover:scale-[1.025]
                        "
                      />

                      {/* Hover overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-violet-950/0
                          transition-all
                          duration-500
                          group-hover:bg-violet-950/10
                        "
                      />
                    </div>
                  </div>

                  {/* PROJECT INFORMATION */}

                  <div className="mx-auto mt-6 w-[88%] sm:w-[82%]">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-mono text-xs text-violet-400">
                          {project.number}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white transition group-hover:text-violet-400">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex shrink-0 gap-4 pt-1">
                        <a
                          href={project.github}
                          className="text-sm text-zinc-600 transition hover:text-white"
                        >
                          GitHub ↗
                        </a>

                        <a
                          href={project.demo}
                          className="text-sm text-zinc-600 transition hover:text-violet-400"
                        >
                          Live ↗
                        </a>
                      </div>
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs text-zinc-600"
                        >
                          #{technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CONTACT */}

          <section
            id="contact"
            className="mt-32 scroll-mt-20 pb-20"
          >
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-violet-500/10 to-transparent p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
                Contact
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Let’s build something together.
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-zinc-500">
                Have an idea, a project or just want to talk about
                development? Feel free to reach out.
              </p>

              <a
                href="mailto:viktoria.kalnyk77@gmail.com"
                className="mt-7 inline-flex rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
              >
                Get in touch →
              </a>
            </div>
          </section>

          <footer className="border-t border-zinc-900 py-8 text-xs text-zinc-600">
            Designed & built with Next.js · 2026
          </footer>
        </div>
      </div>
    </main>
  );
}
