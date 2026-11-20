import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoMarquee } from './components/LogoMarquee'
import { About } from './components/About'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
