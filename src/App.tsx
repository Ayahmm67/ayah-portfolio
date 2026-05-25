import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="bg-[#0f172a] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  )
}