export default function Problem() {
  const painPoints = [
    {
      title: 'Machines operate as black boxes',
      description: 'Equipment runs without visibility into how it behaves and degrades over time, making maintenance decisions reactive rather than informed.',
    },
    {
      title: 'Maintenance relies on fixed schedules or reactions',
      description: 'Teams follow calendar-based maintenance or wait for failures, missing opportunities to optimize based on actual machine condition.',
    },
    {
      title: 'Machine data exists but isn\'t interpreted',
      description: 'Equipment generates signals continuously, but without behavioral intelligence, this data doesn\'t translate into actionable insights.',
    },
    {
      title: 'Failures feel unexpected due to lack of insight',
      description: 'Without understanding normal behavior patterns and degradation trends, equipment failures appear sudden and unplanned.',
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
            Most organizations lack visibility into how their machines behave and degrade over time, leading to reactive maintenance and operational uncertainty.
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
