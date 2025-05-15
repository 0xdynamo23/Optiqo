"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Briefcase, Building2 } from "lucide-react";

interface Broker {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
}

interface BrokerCardProps {
  broker: Broker;
  isSelected: boolean;
  onSelect: (brokerId: string) => void;
}

export function BrokerCard({ broker, isSelected, onSelect }: BrokerCardProps) {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "building-2":
        return <Building2 className="h-6 w-6" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6" />;
      default:
        return <Building2 className="h-6 w-6" />;
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={item}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect(broker.id)}
        className={cn(
          "cursor-pointer rounded-lg border border-border p-6 transition-all",
          isSelected
            ? "border-primary/50 bg-primary/5 shadow-md"
            : "hover:border-muted-foreground/20 hover:bg-accent/50"
        )}
      >
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full",
              broker.color
            )}
          >
            <div className={broker.textColor}>{renderIcon(broker.icon)}</div>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">{broker.name}</h3>
            <p className="text-sm text-muted-foreground">{broker.description}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div
            className={cn(
              "relative h-5 w-5 flex-shrink-0 rounded-full border-2",
              isSelected
                ? "border-primary after:absolute after:left-1/2 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary"
                : "border-muted-foreground/30"
            )}
          />
          <span
            className={cn(
              "ml-2 text-sm",
              isSelected ? "text-primary" : "text-muted-foreground"
            )}
          >
            {isSelected ? "Selected" : "Select"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}