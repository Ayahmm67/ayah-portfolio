import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex items-center
        pt-28
        px-6
      "
    >

      <div
        className="
          max-w-6xl mx-auto
          grid md:grid-cols-2
          gap-20
          items-center
        "
      >

        {/* LEFT SIDE */}

        <div>

       

          <h1
            className="
              text-6xl md:text-7xl
              font-bold
              leading-tight
              mb-8
              text-white
            "
          >
            Ayah
            <br />
            Mohammed
            <br />
            Mujahid
          </h1>

          <p
            className="
              text-gray-300
              text-lg
              leading-relaxed
              mb-10
              max-w-xl
            "
          >
             Software Engineer experienced in full-stack web and mobile application development, UX/UI design, business analysis, requirements engineering, and accessibility-focused digital experiences. Passionate about building scalable and user-centered products through collaborative and product-driven development workflows.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">

            <a
              href="#projects"
              className="
                bg-blue-500
                hover:bg-blue-400
                transition
                px-7 py-4
                rounded-2xl
                font-medium
              "
            >
              View Projects
            </a>

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayahmm67@gmail.com"
              className="
                border border-white/10
                hover:border-blue-400
                transition
                px-7 py-4
                rounded-2xl
                font-medium
              "
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/ayahmm67"
              target="_blank"
              className="
                w-14 h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                hover:border-blue-400
                flex items-center justify-center
                transition
              "
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                w-14 h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                hover:border-blue-400
                flex items-center justify-center
                transition
              "
            >
              <Linkedin />
            </a>

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayahmm67@gmail.com"
              className="
                w-14 h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                hover:border-blue-400
                flex items-center justify-center
                transition
              "
            >
              <Mail />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            relative
            flex items-center justify-center
          "
        >

          <div
            className="
              absolute
              w-[400px]
              h-[400px]
              bg-blue-500/20
              blur-[120px]
              rounded-full
            "
          />

          <div
            className="
              relative
              w-full
              max-w-[450px]
              h-[520px]
              rounded-[40px]
              overflow-hidden
              border border-white/10
              bg-gradient-to-br
              from-blue-500/10
              to-cyan-400/10
              backdrop-blur-xl
              flex items-center justify-center
            "
          >

            <span className="text-gray-400 text-lg">
              <img
src="/ayah-portfolio/profile.jpg"
  alt="Ayah Mujahid"
  className="
    w-full
    h-full
    object-cover
  "
/>
            </span>

          </div>
        </div>

      </div>
    </section>
  )
}