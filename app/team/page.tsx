"use client";

import { LandingNavbar } from '@/components/landing/navbar';
import { LandingFooter } from '@/components/landing/footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingNavbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-8">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a diverse team of traders, engineers, and analysts working together to revolutionize algorithmic trading.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <section className="mb-24 sm:mb-32">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            Leadership Team
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            {[
              { name: "John Smith", role: "CEO & Founder" },
              { name: "Sarah Johnson", role: "CTO" },
              { name: "Michael Chen", role: "Head of Research" }
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative p-8 text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden transform-gpu group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-lg text-muted-foreground">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Company Culture Section */}
        <motion.section 
          className="mb-24 sm:mb-32"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            variants={fadeInUp}
          >
            Our Culture
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              {
                title: "Innovation First",
                description: "We believe in pushing boundaries and challenging the status quo. Our team is constantly exploring new technologies and methodologies to improve our trading algorithms."
              },
              {
                title: "Collaboration",
                description: "Success comes from working together. We foster an environment where ideas are shared freely and everyone's voice is heard."
              },
              {
                title: "Continuous Learning",
                description: "The financial markets are always evolving, and so are we. We invest heavily in our team's professional development."
              },
              {
                title: "Work-Life Balance",
                description: "We believe in working smart and maintaining a healthy balance between work and personal life."
              }
            ].map((culture, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    {culture.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {culture.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Join Our Growing Team</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented individuals who share our passion for innovation in algorithmic trading.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/careers"
              className="inline-flex items-center justify-center rounded-xl text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 py-2 transform-gpu hover:shadow-lg"
            >
              View Open Positions
            </a>
          </motion.div>
        </motion.section>
      </main>
      <LandingFooter />
    </div>
  );
} 