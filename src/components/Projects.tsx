import SectionWrapper from './SectionWrapper'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <SectionWrapper className="py-28 px-6 bg-[#111827]">
<section id="projects">
      <div className="max-w-6xl mx-auto">

       
        <h2 className="text-5xl font-bold mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur
                hover:-translate-y-2
                hover:border-blue-400
                transition-all
                duration-300
              "
            >

              <div className="flex items-center justify-between mb-5">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <span
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-blue-500/10
                    text-blue-300
                    border border-blue-400/20
                  "
                >
                  {project.category}
                </span>

              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      bg-white/5
                      border border-white/10
                      text-sm
                      px-4 py-2
                      rounded-full
                      text-gray-200
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="space-y-3 mb-6">

                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-blue-400">
                      ✦
                    </span>

                    <p>{highlight}</p>
                  </div>
                ))}

              </div>

              <div className="flex gap-5 mt-6">
{project.caseStudy && (
  <a
    href={project.caseStudy}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition font-medium"
  >
    📄 View Case Study
  </a>
)}

{project.documentation && (
  <a
    href={project.documentation}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition font-medium"
  >
    📑 View Documentation
  </a>
)}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      text-blue-400
                      hover:text-blue-300
                      transition
                    "
                  >
                    GitHub
                  </a>
                )}

              {project.demo && (
  <a
    href={project.demo}
    target="_blank"
    className="
      text-blue-400
      hover:text-blue-300
      transition
    "
  >
    Live Demo
  </a>
)}

              </div>
            </div>
          ))}

        </div>
      </div>
      </section>
    </SectionWrapper>
  )
}