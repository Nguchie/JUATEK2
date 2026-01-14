interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  // Placeholder for logo - replace with actual logo image
  // To use your logo, uncomment the Image import and code below:
  // import Image from 'next/image'
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* If you have a logo file, uncomment and use this: */}
      {/* 
      <Image
        src="/logo.png"
        alt="JUATEK Logo"
        width={150}
        height={50}
        priority
        className={className}
      />
      */}
      
      {/* Temporary text logo until actual logo is added */}
      <span className="text-2xl font-bold text-juatek-blue">
        JUATEK
      </span>
    </div>
  )
}
