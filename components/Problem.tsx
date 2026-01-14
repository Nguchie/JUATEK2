export default function Problem() {
  const painPoints = [
    {
      title: 'Machines fail without enough warning',
      description: 'Standard alerts trigger too late, after damage has already started.',
    },
    {
      title: 'Medical equipment downtime delays patient care',
      description: 'Critical diagnostic and treatment equipment breaks down unexpectedly, impacting patient outcomes.',
    },
    {
      title: 'Reactive maintenance is expensive and risky',
      description: 'Emergency repairs cost 3-5x more than planned maintenance and create operational disruptions.',
    },
    {
      title: 'Built-in alerts miss early warning signs',
      description: 'Manufacturer alerts only detect problems after they become critical, not before they start.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipment failures happen when you least expect them, causing costly downtime and putting operations at risk.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
