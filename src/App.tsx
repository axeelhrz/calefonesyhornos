import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileActionBar } from './components/MobileActionBar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Header />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <MobileActionBar />
      <WhatsAppButton />
    </div>
  )
}

export default App
