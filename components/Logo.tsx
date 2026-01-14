import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/juatek2.jpg"
        alt="JUATEK Logo"
        width={150}
        height={50}
        priority
        className={className}
      />
    </div>
  )
}
