export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              Predict Failures Before They Cost You Time, Money, or Patient Safety
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              AI-powered predictive maintenance for industrial and medical equipment — smarter than built-in alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-juatek-blue text-white font-semibold rounded-lg hover:bg-juatek-blue-dark transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                Book a Free Demo
              </a>
              <a
                href="#pilot"
                className="inline-flex items-center justify-center px-8 py-4 bg-juatek-gold text-white font-semibold rounded-lg hover:bg-juatek-gold-dark transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                Pre-Book a Pilot
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Abstract AI + IoT illustration placeholder */}
            <div className="relative w-full h-96 bg-gradient-to-br from-juatek-blue/10 to-juatek-gold/10 rounded-2xl flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-juatek-blue to-juatek-gold rounded-lg opacity-60 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
