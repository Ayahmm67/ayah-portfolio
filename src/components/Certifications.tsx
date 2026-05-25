import SectionWrapper from './SectionWrapper'

const certifications = [
  'UI/UX Design Course – Taibah University',
  'Full Stack Web Development – Udemy',
  'Git Fundamentals',
  'User Interviews & User Onboarding',
  'Database Systems',
  'Data Science for Future Foresight',
]

export default function Certifications() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

      
        <div className="grid md:grid-cols-2 gap-5">

          {certifications.map((item) => (
            <div
              key={item}
              className="
                bg-white/5
                border border-white/10
                p-6
                rounded-2xl
              "
            >
              <p className="text-gray-200">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  )
}