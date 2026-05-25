import SectionWrapper from './SectionWrapper'

const skillCategories = [
  {
    title: 'Frontend Engineering',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },

 {
  title: 'Backend & APIs',
  skills: [
    'Python',
    'FastAPI',
    'Node.js',
    'SQL',
    'Firebase',
    'REST APIs',
  ],
},

  {
    title: 'Mobile Development',
    skills: [
      'React Native',
      'Flutter',
      'Java Android',
    ],
  },

  {
    title: 'UX/UI & Research',
    skills: [
      'Figma',
      'UX Research',
      'Usability Testing',
      'A/B Testing',
      'Wireframing',
      'Prototyping',
    ],
  },

  {
    title: 'Software Engineering',
    skills: [
      'Requirements Analysis',
      'Agile Development',
      'Software Testing',
      'System Design',
      'Git & GitHub',
    ],
  },
]

export default function Skills() {
  return (
    <SectionWrapper className="py-28 px-6">
<section id="skills">
      <div className="max-w-6xl mx-auto">

     

        <h2 className="text-5xl font-bold mb-14">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
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

              <h3 className="text-2xl font-semibold mb-6 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-blue-500/10
                      border border-blue-400/20
                      text-blue-300
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
 </section>
    </SectionWrapper>
  )
}