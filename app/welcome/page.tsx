"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart2, ArrowRight } from "lucide-react";

export default function WelcomePage() {
  const [showContinue, setShowContinue] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex max-w-md flex-col items-center justify-center space-y-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10"
        >
          <BarChart2 className="h-12 w-12 text-primary" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold">Welcome to Optiqo</h1>
          <p className="text-muted-foreground">
            Your journey to algorithmic trading starts here
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: showContinue ? 1 : 0 
          }}
          transition={{ 
            delay: 1.5, 
            duration: 0.5 
          }}
          className="pt-4"
        >
          <Button 
            size="lg" 
            onClick={() => router.push("/dashboard")}
            className="gap-2"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}