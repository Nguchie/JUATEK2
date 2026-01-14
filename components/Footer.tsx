import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="text-white [&_span]:text-white" />
            <p className="mt-4 text-sm">
              Kenya-based AI & IoT solutions for industrial and healthcare equipment
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              <a href="mailto:info@juatek.com" className="hover:text-juatek-gold transition-colors">
                info@juatek.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <p className="text-sm">
              JUATEK provides AI-powered predictive maintenance systems to help organizations predict failures before they happen, reduce downtime, and protect critical operations.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JUATEK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
