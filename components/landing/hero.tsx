"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Lock, Zap, TrendingUp, BarChart, LineChart } from "lucide-react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

const FloatingElement = ({ children, delay = 0, duration = 4, y = 15 }: FloatingElementProps) => (
  <motion.div
    animate={{
      y: [-y, y]
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
);

export function LandingHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
        
        {/* Floating icons background */}
        <div className="absolute inset-0 opacity-10">
          <FloatingElement delay={0} y={10} duration={5}>
            <TrendingUp className="absolute top-1/4 left-1/4 h-12 w-12 text-primary" />
          </FloatingElement>
          <FloatingElement delay={1.2} y={8} duration={6}>
            <BarChart className="absolute top-1/3 right-1/4 h-16 w-16 text-primary" />
          </FloatingElement>
          <FloatingElement delay={0.8} y={12} duration={5.5}>
            <LineChart className="absolute bottom-1/4 left-1/3 h-20 w-20 text-primary" />
          </FloatingElement>
        </div>

        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.08), transparent 70%)",
              "radial-gradient(circle at 60% 40%, rgba(var(--primary-rgb), 0.05), transparent 60%)",
              "radial-gradient(circle at 40% 60%, rgba(var(--primary-rgb), 0.08), transparent 70%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="relative w-full py-16 md:py-28 lg:py-36"
      >
        <div className="container px-6 md:px-8 mx-auto">
          <motion.div 
            className="flex flex-col items-center space-y-10 text-center"
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  Your Trading.
                </motion.span>
                <br className="hidden sm:inline" />
                <motion.span 
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary/80 via-primary to-primary/80"
                  animate={{ 
                    backgroundPosition: ["100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  Our Algorithms.
                </motion.span>
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[800px] text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                We help you automate your trading using pre-built, backtested algorithms that integrate directly with your broker account — no coding needed.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 w-full max-w-sm sm:max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link href="/auth" className="block">
                  <Button size="lg" className="w-full h-12 text-lg relative overflow-hidden group">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                      animate={{
                        x: ["0%", "200%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative">
                      Join Waitlist <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link href="#features" className="block">
                  <Button size="lg" variant="outline" className="w-full h-12 text-lg">
                    Explore Strategies
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Features grid with minimal animations */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-20 w-full max-w-6xl mx-auto px-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  icon: BarChart2,
                  title: "Pre-built Strategies",
                  description: "Choose from our collection of battle-tested trading algorithms"
                },
                {
                  icon: Lock,
                  title: "Secure Integration",
                  description: "Connect safely with your preferred broker platform"
                },
                {
                  icon: Zap,
                  title: "Real-time Execution",
                  description: "Lightning-fast order execution and portfolio rebalancing"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
                  <div className="relative p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <FloatingElement delay={index * 0.2} duration={4} y={3}>
                      <feature.icon className="h-14 w-14 text-primary mb-6 transform group-hover:scale-105 transition-transform duration-300" />
                    </FloatingElement>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}