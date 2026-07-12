import { GridLines, NoiseOverlay } from './components/Chrome'
import Nav from './components/Nav'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Work from './sections/Work'

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <GridLines />
      <Nav />

      {/* z-10 keeps content above the fixed gridlines */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
      </main>

      <div className="relative z-10">
        <Contact />
      </div>
    </>
  )
}
