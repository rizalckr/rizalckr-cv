import './App.css'
import NavBar from './sections/Navbar/NavBar'
import Hero from './sections/Hero/Hero'
import Project from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import { ThemeProvider } from './common/ThemeContext'

function App() {
  return (
    <>
    <ThemeProvider>
    <NavBar />
    <Hero />
    <Project />
    <Skills />
    <Contact />
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
