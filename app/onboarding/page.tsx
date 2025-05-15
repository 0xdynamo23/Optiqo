"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BrokerCard } from "@/components/onboarding/broker-card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OnboardingPage() {
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);
  const router = useRouter();

  const brokers = [
    {
      id: "broker1",
      name: "Fidelity",
      description: "Connect to your Fidelity brokerage account",
      icon: "building-2",
      color: "bg-chart-1/10",
      textColor: "text-chart-1",
    },
    {
      id: "broker2",
      name: "Vanguard",
      description: "Connect to your Vanguard brokerage account",
      icon: "briefcase",
      color: "bg-chart-2/10",
      textColor: "text-chart-2",
    },
  ];

  const handleSelectBroker = (brokerId: string) => {
    setSelectedBroker(brokerId);
  };

  const handleContinue = () => {
    router.push("/dashboard");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="container mx-auto flex max-w-screen-lg flex-1 flex-col px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 space-y-2"
        >
          <h1 className="text-3xl font-bold">Connect Your Broker</h1>
          <p className="text-muted-foreground">
            Link your brokerage account to unlock the full potential of FinEdge.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {brokers.map((broker) => (
            <BrokerCard
              key={broker.id}
              broker={broker}
              isSelected={selectedBroker === broker.id}
              onSelect={handleSelectBroker}
            />
          ))}
        </motion.div>

        <div className="mt-auto space-y-4 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              variant={selectedBroker ? "default" : "outline"}
              size="lg"
              onClick={handleContinue}
              className="w-full justify-between md:w-auto"
            >
              {selectedBroker ? "Connect Broker" : "Skip for now"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          {selectedBroker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="link"
                onClick={() => router.push("/dashboard")}
                className="text-muted-foreground"
              >
                Skip for now
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}