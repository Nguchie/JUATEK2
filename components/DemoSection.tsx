import DemoForm from './DemoForm'

export default function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book a Free Demo
          </h2>
          <p className="text-xl text-gray-600">
            See how JUATEK can protect your equipment and operations.
          </p>
        </div>
        <DemoForm />
      </div>
    </section>
  )
}
