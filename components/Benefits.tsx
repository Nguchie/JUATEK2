export default function Benefits() {
  const benefits = [
    {
      title: 'Plan Instead of React',
      description: 'Understand machine degradation patterns and schedule maintenance during planned windows rather than responding to unexpected failures.',
    },
    {
      title: 'Visibility Into Machine Behavior',
      description: 'Gain continuous insight into how equipment behaves and degrades over time, eliminating the black box problem.',
    },
    {
      title: 'Operational Confidence',
      description: 'Make maintenance decisions with confidence based on behavioral intelligence rather than fixed schedules or guesswork.',
    },
    {
      title: 'Optimize Maintenance Costs',
      description: 'Intervene at the right time based on actual machine condition, avoiding both premature maintenance and costly emergency repairs.',
    },
    {
      title: 'Extend Equipment Lifespan',
      description: 'Maintain equipment based on behavioral understanding, keeping machines running optimally throughout their lifecycle.',
    },
    {
      title: 'Cross-Industry Application',
      description: 'Apply machine intelligence across industrial and healthcare environments where understanding equipment behavior matters.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain visibility, confidence, and control through machine behavior intelligence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-juatek-blue/30 transition-all hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
