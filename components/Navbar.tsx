import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <a href="#solution" className="text-gray-700 hover:text-juatek-blue transition-colors">
              Solution
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-juatek-blue transition-colors">
              Benefits
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-juatek-blue transition-colors">
              Use Cases
            </a>
            <a
              href="#demo"
              className="px-6 py-2 bg-juatek-blue text-white rounded-lg hover:bg-juatek-blue-dark transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
