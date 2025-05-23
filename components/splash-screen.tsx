'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2400)

    return () => clearTimeout(timer)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 20
      })
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 grid place-items-center bg-background/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center p-8">
        {/* Main animated container */}
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Outer rotating circle */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="stroke-green-400/20"
                cx="50"
                cy="50"
                r="45"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
              />
            </svg>
          </motion.div>

          {/* Main circle progress */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="stroke-green-400"
              cx="50"
              cy="50"
              r="40"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          
          {/* Candlestick chart animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-end space-x-1.5">
              {[28, 40, 24, 36, 32].map((height, index) => (
                <motion.div
                  key={index}
                  className="w-1.5 bg-green-400 rounded-full"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height, opacity: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.15,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Text and progress */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Optiqo
            </h2>
            {/* Progress bar container */}
            <div className="relative w-48 md:w-56">
              <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              {/* Loading text */}
              <motion.p
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 