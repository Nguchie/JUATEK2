export default function Solution() {
  const features = [
    {
      title: 'Continuous Behavior Monitoring',
      description: 'IoT sensors capture vibration, temperature, current, usage cycles, and performance signals continuously, building a complete picture of machine behavior.',
    },
    {
      title: 'Behavioral Intelligence Layer',
      description: 'AI models establish baselines, track drift patterns, and interpret how machines behave and degrade over time.',
    },
    {
      title: 'Operational Insight & Predictions',
      description: 'Transform raw signals into actionable insights, failure predictions, and maintenance recommendations based on behavioral patterns.',
    },
    {
      title: 'Vendor-Agnostic Integration',
      description: 'Works with existing industrial and medical equipment. Non-intrusive and doesn\'t interfere with certified medical devices.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The JUATEK Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JUATEK is a continuous machine behavior monitoring and interpretation system that builds baselines, tracks drift, and detects abnormal patterns to support informed maintenance decisions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-juatek-blue/5 to-juatek-gold/5 p-6 rounded-xl border border-juatek-blue/10"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
