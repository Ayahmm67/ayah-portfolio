import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
} from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <div
          className="
            bg-gradient-to-br
            from-blue-500/10
            to-cyan-400/5
            border border-white/10
            rounded-[40px]
            p-10 md:p-16
            backdrop-blur-xl
          "
        >

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <h2
                className="
                  text-5xl md:text-6xl
                  font-bold
                  leading-tight
                  mb-6
                  text-white
                "
              >
                Let’s Build
                <br />
                Something Great
              </h2>

              <p
                className="
                  text-gray-300
                  text-lg
                  leading-relaxed
                  mb-10
                "
              >
               Full-Stack Software Engineer with experience in frontend and backend development, UX/UI design, business analysis, and AI-powered digital products focused on scalable and user-centered solutions.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=ayahmm67@gmail.com"
                  className="
                    bg-blue-500
                    hover:bg-blue-400
                    transition
                    px-7 py-4
                    rounded-2xl
                    font-medium
                  "
                >
                  Contact Me
                </a>

                <a
                  href="/Ayah-CV.pdf"
                  target="_blank"
                  className="
                    border border-white/10
                    hover:border-blue-400
                    transition
                    px-7 py-4
                    rounded-2xl
                    font-medium
                  "
                >
                  Resume
                </a>

              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
              "
            >

              <div className="space-y-8">

                <div className="flex items-center gap-5">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-blue-500/10
                      flex items-center justify-center
                    "
                  >
                    <Mail className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Email
                    </p>

                    <p className="text-white text-lg">
                     ayahmm67@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-blue-500/10
                      flex items-center justify-center
                    "
                  >
                    <Phone className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Phone
                    </p>

                    <p className="text-white text-lg">
                      +966549896090
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-blue-500/10
                      flex items-center justify-center
                    "
                  >
                    <MapPin className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Location
                    </p>

                    <p className="text-white text-lg">
                      Jeddah, Saudi Arabia
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex gap-5 mt-10">

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

          </div>
        </div>
      </div>
    </section>
  )
}