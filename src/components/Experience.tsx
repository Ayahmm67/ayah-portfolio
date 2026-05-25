import SectionWrapper from './SectionWrapper'

const experiences = [
  {
    role: 'UX/UI Specialist Intern',

    company: 'Barakah App',

    period: '2025',

    description:
      'Conducted UX research, usability testing, and A/B testing with 50+ users to evaluate onboarding, personalization, and navigation experiences. Designed high-fidelity Figma prototypes and transformed user insights into scalable product improvements.',

    skills: [
      'UX Research',
      'Usability Testing',
      'A/B Testing',
      'Figma',
      'Product Design',
    ],
  },

  {
    role: 'Public Relations',

    company: 'University of Jeddah Club',

    period: '2024 - 2025',

    description:
      'Supported communication initiatives, event coordination, and collaborative activities across university programs while strengthening leadership, teamwork, and organizational skills.',

    skills: [
      'Communication',
      'Leadership',
      'Teamwork',
      'Coordination',
    ],
  },
]

export default function Experience() {
  return (
    <SectionWrapper
      className="py-28 px-6"
    >
      <section id="experience">
      <div className="max-w-5xl mx-auto">

       

        <h2 className="text-5xl font-bold mb-14">
          Professional Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((item) => (
            <div
              key={item.role}
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

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="text-blue-400 mt-1">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-gray-400 mt-3 md:mt-0">
                  {item.period}
                </span>

              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3">

                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-blue-500/10
                      border border-blue-400/20
                      text-sm text-blue-300
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