"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, LineChart } from "lucide-react";

interface BrokerSelectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (broker: string) => void;
}

const brokers = [
  {
    id: "bhim",
    name: "BHIM",
    description: "Connect with BHIM for seamless trading",
    icon: Building2,
  },
  {
    id: "zerodha",
    name: "Zerodha",
    description: "India's largest broker by active retail clients",
    icon: LineChart,
  },
];

export function BrokerSelectDialog({
  open,
  onOpenChange,
  onSelect,
}: BrokerSelectDialogProps) {
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);

  const handleSelect = (brokerId: string) => {
    setSelectedBroker(brokerId);
    onSelect(brokerId);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Your Broker</DialogTitle>
          <DialogDescription>
            Choose your preferred trading platform to continue
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {brokers.map((broker) => (
            <motion.div
              key={broker.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className={`w-full h-auto p-4 text-left ${
                  selectedBroker === broker.id
                    ? "border-primary"
                    : "border-border"
                }`}
                onClick={() => handleSelect(broker.id)}
              >
                <div className="flex items-center gap-3">
                  <broker.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-semibold">{broker.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {broker.description}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
} 