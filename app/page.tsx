'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { SplashScreen } from '@/components/splash-screen'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-background transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation */}
        <nav className="w-full py-4 px-6 flex justify-between items-center border-b fixed top-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="text-2xl font-bold">
            Optiqo
          </div>
          <Link href="/auth">
            <Button variant="outline">
              Login
            </Button>
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="pt-[73px] min-h-screen relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-image.jpg"
              alt="Trading Background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <main className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Automated Investing Made Simple with <span className="text-green-400">Optiqo</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                We help you automate your trading using pre-built, backtested algorithms that integrate directly with your broker account — no coding needed.
              </p>
              <Link
                href="/auth"
                className="inline-flex bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300"
              >
                Get Started
              </Link>
            </main>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Optiqo?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-card hover:bg-card/80 transition">
                <h3 className="text-xl font-semibold mb-4">Automated Trading</h3>
                <p className="text-muted-foreground">Execute trades automatically with our sophisticated algorithms. No need to monitor markets 24/7.</p>
              </div>
              <div className="p-6 rounded-xl bg-card hover:bg-card/80 transition">
                <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
                <p className="text-muted-foreground">Advanced risk management systems protect your investments with stop-loss and position sizing.</p>
              </div>
              <div className="p-6 rounded-xl bg-card hover:bg-card/80 transition">
                <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
                <p className="text-muted-foreground">Monitor your portfolio performance with detailed analytics and real-time reporting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video">
                <Image
                  src="/hero-image.jpg"
                  alt="Trading Platform"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Connect Your Account</h3>
                    <p className="text-muted-foreground">Link your broker account securely with our platform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Choose Your Strategy</h3>
                    <p className="text-muted-foreground">Select from our range of proven trading strategies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Start Trading</h3>
                    <p className="text-muted-foreground">Let our algorithms handle your trades while you focus on what matters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading Smarter?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of traders who have already automated their trading strategy with Optiqo.
            </p>
            <Link
              href="/auth"
              className="inline-flex bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300"
            >
              Create Your Account
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Optiqo</div>
              <div className="text-sm text-muted-foreground">© 2024 Optiqo. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}