import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.type === filter)

  return (
    <SectionWrapper className="py-28 px-6 bg-[#111827]">
      <section id="projects">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h2 className="text-5xl font-bold mb-8">
            Featured Projects
          </h2>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-12">

            <button
              onClick={() => setFilter('all')}
              className={`
                px-5 py-2
                rounded-full
                border
                transition
                ${
                  filter === 'all'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400'
                }
              `}
            >
              All
            </button>

            <button
              onClick={() => setFilter('development')}
              className={`
                px-5 py-2
                rounded-full
                border
                transition
                ${
                  filter === 'development'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400'
                }
              `}
            >
              Development
            </button>

            <button
              onClick={() => setFilter('uxui')}
              className={`
                px-5 py-2
                rounded-full
                border
                transition
                ${
                  filter === 'uxui'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400'
                }
              `}
            >
              UX/UI
            </button>

          </div>

          {/* PROJECTS */}
          <div className="grid md:grid-cols-2 gap-8">

            {filteredProjects.map((project) => (

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

                {/* PROJECT HEADER */}
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

                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
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

                {/* HIGHLIGHTS */}
                <div className="space-y-3 mb-6">

                  {project.highlights.map((highlight) => (

                    <div
                      key={highlight}
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-300
                      "
                    >

                      <span className="text-blue-400">
                        ✦
                      </span>

                      <p>{highlight}</p>

                    </div>

                  ))}

                </div>

                {/* PROJECT LINKS */}
                <div className="flex flex-wrap gap-5 mt-6">

                  {/* FIGMA */}
                {project.caseStudy && (
  <a
    href={project.caseStudy}
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-blue-400
      hover:text-blue-300
      transition
      font-medium
    "
  >
    📄 View Case Study
  </a>
)}
               

                  {/* DOCUMENTATION */}
                  {project.documentation && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-blue-400
                        hover:text-blue-300
                        transition
                        font-medium
                      "
                    >
                      📑 View Documentation
                    </a>
                  )}

                  {/* GITHUB */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-blue-400
                        hover:text-blue-300
                        transition
                        font-medium
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {/* DEMO */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-blue-400
                        hover:text-blue-300
                        transition
                        font-medium
                      "
                    >
                      ▶ Live Demo
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