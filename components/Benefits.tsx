export default function Benefits() {
  const benefits = [
    {
      title: 'Reduce Unplanned Downtime',
      description: 'Predict failures before they happen and schedule maintenance during planned windows.',
    },
    {
      title: 'Protect Critical Medical Equipment',
      description: 'Ensure diagnostic and treatment equipment is always ready when patients need it.',
    },
    {
      title: 'Improve Patient Service Continuity',
      description: 'Prevent equipment failures that delay appointments and impact patient care.',
    },
    {
      title: 'Lower Repair and Replacement Costs',
      description: 'Early detection means smaller, less expensive repairs instead of major replacements.',
    },
    {
      title: 'Extend Equipment Lifespan',
      description: 'Proactive maintenance keeps equipment running optimally for longer.',
    },
    {
      title: 'Enable Data-Driven Decisions',
      description: 'Make maintenance decisions based on actual equipment data, not guesswork.',
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
            Transform your maintenance strategy from reactive to predictive.
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
