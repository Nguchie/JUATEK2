import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              Understand Your Machines Long Before They Fail
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A machine intelligence layer that transforms raw equipment signals into actionable operational insight, enabling informed maintenance decisions before failures occur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:juatekltd@gmail.com?subject=Book a Free Demo - JUATEK&body=Hello, I would like to book a free demo of JUATEK's machine intelligence system."
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
          <div className="hidden md:block relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero-person-iot.png"
                alt="Professional operating IoT sensors for predictive maintenance"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
