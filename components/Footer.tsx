import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="relative w-32 h-auto mb-4">
              <Image
                src="/logo_footer.png"
                alt="JUATEK Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm">
              Kenya-based AI & IoT solutions for industrial and healthcare equipment
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href="mailto:juatekltd@gmail.com" className="hover:text-juatek-gold transition-colors">
                  juatekltd@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+254708847933" className="hover:text-juatek-gold transition-colors">
                  0708847933
                </a>
              </p>
              <p>
                <a href="tel:+254741504911" className="hover:text-juatek-gold transition-colors">
                  0741504911
                </a>
              </p>
            </div>
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
