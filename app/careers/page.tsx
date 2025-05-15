"use client";

import { LandingNavbar } from '@/components/landing/navbar';
import { LandingFooter } from '@/components/landing/footer';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase } from 'lucide-react';

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

export default function CareersPage() {
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
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the future of automated trading. Join us in our mission to democratize algorithmic trading.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Open Positions */}
          {[
            {
              title: "Senior Full Stack Developer",
              description: "Build and maintain our trading platform using modern technologies like React, Node.js, and Python.",
              location: "Remote",
              type: "Full-time"
            },
            {
              title: "Quantitative Analyst",
              description: "Design and implement trading strategies using statistical analysis and machine learning.",
              location: "Hybrid",
              type: "Full-time"
            },
            {
              title: "Product Manager",
              description: "Lead product strategy and work closely with engineering to deliver exceptional user experiences.",
              location: "On-site",
              type: "Full-time"
            }
          ].map((position, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  {position.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {position.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{position.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.section 
          className="mt-24 sm:mt-32"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            variants={fadeInUp}
          >
            Why Join Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                title: "Competitive Salary",
                description: "Industry-leading compensation packages"
              },
              {
                title: "Health Benefits",
                description: "Comprehensive health, dental, and vision coverage"
              },
              {
                title: "Learning Budget",
                description: "Annual budget for courses and conferences"
              },
              {
                title: "Remote Work",
                description: "Flexible work arrangements"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Briefcase className="h-10 w-10 text-primary mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <LandingFooter />
    </div>
  );
} 