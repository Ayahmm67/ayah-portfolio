const links = [
  'About',
  'Projects',
  'Experience',
  'Skills',
  'Contact',
]

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-[#0f172a]/80
        backdrop-blur-xl
        border-b border-white/10
      "
    >
      <nav
        className="
          max-w-6xl mx-auto
          px-6 h-20
          flex items-center justify-between
        "
      >

        <h1
          className="
            text-2xl font-bold
            text-white
          "
        >
          Ayah Mujahid
        </h1>

        <div className="hidden md:flex gap-8">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                text-gray-300
                hover:text-blue-400
                transition
              "
            >
              {link}
            </a>
          ))}

        </div>
      </nav>
    </header>
  )
}