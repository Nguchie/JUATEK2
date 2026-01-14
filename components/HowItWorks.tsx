export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Sensors Capture Machine Signals',
      description: 'IoT sensors continuously collect vibration, temperature, current, and usage data, transforming machine operation into interpretable signals.',
    },
    {
      number: '2',
      title: 'AI Learns & Establishes Baselines',
      description: 'Machine learning models learn normal behavior patterns, establish baselines, and track how equipment performance drifts over time.',
    },
    {
      number: '3',
      title: 'Behavioral Insights Generated',
      description: 'The system interprets behavioral patterns, identifies degradation trends, and generates predictions and recommendations based on machine intelligence.',
    },
    {
      number: '4',
      title: 'Teams Make Informed Decisions',
      description: 'Maintenance teams receive actionable insights and can plan interventions based on behavioral understanding rather than reacting to failures.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to understanding machine behavior and making data-driven maintenance decisions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-juatek-blue to-juatek-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-juatek-blue to-juatek-gold transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
