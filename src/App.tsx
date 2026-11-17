import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { MobileActionBar } from './components/MobileActionBar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <div className="overflow-x-hidden bg-ink">
      <div className="grain" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Services />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}

export default App
