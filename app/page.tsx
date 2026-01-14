import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import UseCases from '@/components/UseCases'
import PilotProgram from '@/components/PilotProgram'
import FinalCTA from '@/components/FinalCTA'
import DemoSection from '@/components/DemoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <div id="solution">
        <Solution />
      </div>
      <HowItWorks />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <PilotProgram />
      <FinalCTA />
      <DemoSection />
      <Footer />
    </main>
  )
}
