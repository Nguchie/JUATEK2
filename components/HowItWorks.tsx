export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Sensors Collect Data',
      description: 'IoT sensors continuously monitor vibration, temperature, current, and usage patterns in real-time.',
    },
    {
      number: '2',
      title: 'AI Analyzes Patterns',
      description: 'Machine learning models analyze data patterns, detect anomalies, and learn normal equipment behavior.',
    },
    {
      number: '3',
      title: 'Early Warnings Generated',
      description: 'The system generates early warnings and failure predictions before standard alarms trigger.',
    },
    {
      number: '4',
      title: 'Teams Act Proactively',
      description: 'Your maintenance team receives alerts and can schedule repairs before breakdown or service interruption.',
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
            A simple, powerful process that transforms reactive maintenance into proactive protection.
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
