import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 flex justify-between items-center border-b">
        <div className="text-2xl font-bold">
          Optiqo
        </div>
        <Link href="/auth">
          <Button variant="outline">
            Login
          </Button>
        </Link>
      </nav>

      {/* Hero Section with Split Layout */}
      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Left Content */}
        <div className="w-1/2 flex flex-col justify-center px-12 lg:px-20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Transforming Your Business Vision
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We specialize in delivering innovative solutions that drive growth and efficiency for businesses of all sizes.
          </p>
          <div className="flex gap-4">
            <Link href="/auth">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 relative">
          <Image
            src="/hero-image.jpg"
            alt="Business Innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" /> 
        </div>
      </div>
    </div>
  )
}