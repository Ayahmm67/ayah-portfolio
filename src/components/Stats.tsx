import SectionWrapper from './SectionWrapper'

const stats = [
  {
    number: '50+',
    label: 'Users Tested',
  },
  {
    number: '4.94',
    label: 'GPA',
  },
  {
    number: '10+',
    label: 'Projects Built',
  },
  {
    number: '2026',
    label: 'Graduation',
  },
]

export default function Stats() {
  return (
    <SectionWrapper className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item.label}
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur
            "
          >
            <h3 className="text-5xl font-bold mb-3 text-blue-400">
              {item.number}
            </h3>

            <p className="text-gray-300">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </SectionWrapper>
  )
}