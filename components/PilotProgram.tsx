export default function PilotProgram() {
  return (
    <section id="pilot" className="py-16 md:py-24 bg-gradient-to-br from-juatek-blue to-juatek-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Early Access / Pilot Program
          </h2>
          <p className="text-xl mb-8 opacity-90">
            JUATEK is onboarding early industrial and healthcare partners. Limited pilot slots available.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">
              Early partners receive:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-juatek-gold text-xl">✓</span>
                <span className="text-lg">Discounted pricing for early adopters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-juatek-gold text-xl">✓</span>
                <span className="text-lg">Custom monitoring setup tailored to your equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-juatek-gold text-xl">✓</span>
                <span className="text-lg">Priority support and dedicated account management</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-juatek-gold text-white font-semibold rounded-lg hover:bg-juatek-gold-dark transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Apply for Pilot
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-juatek-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
