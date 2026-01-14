export default function UseCases() {
  const useCases = [
    {
      category: 'Industrial',
      icon: '🏭',
      items: [
        'Manufacturing machines',
        'Compressors & motors',
        'Production lines',
      ],
    },
    {
      category: 'Healthcare & Medical',
      icon: '🏥',
      items: [
        'Eye diagnostic machines (OCT, fundus cameras, slit lamps)',
        'Dental chairs & imaging equipment',
        'Sterilization and lab equipment',
        'Diagnostic devices prone to mechanical wear',
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JUATEK protects critical equipment across industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{useCase.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {useCase.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {useCase.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-juatek-gold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
