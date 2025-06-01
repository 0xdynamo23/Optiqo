"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { BrokerSelectDialog } from "@/components/dashboard/broker-select-dialog";
import { StockChart } from "@/components/dashboard/stock-chart";
import { StrategyGrid } from "@/components/dashboard/strategy-grid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2, PieChart, LineChart, Settings } from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const [showBrokerDialog, setShowBrokerDialog] = useState(true);
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);

  const handleBrokerSelect = (brokerId: string) => {
    setSelectedBroker(brokerId);
    setShowBrokerDialog(false);
  };

  return (
    <>
      <BrokerSelectDialog
        open={showBrokerDialog}
        onOpenChange={setShowBrokerDialog}
        onSelect={handleBrokerSelect}
      />

      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}</h1>
            <p className="text-muted-foreground">
              {selectedBroker
                ? `Connected to ${selectedBroker.toUpperCase()}`
                : "Select a broker to start trading"}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {[
              {
                title: "Total Portfolio Value",
                value: "$0.00",
                icon: BarChart2,
                color: "text-chart-1",
              },
              {
                title: "Today's Change",
                value: "$0.00",
                icon: LineChart,
                color: "text-chart-2",
              },
              {
                title: "Total Return",
                value: "0.00%",
                icon: PieChart,
                color: "text-chart-3",
              },
            ].map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main Chart Section */}
            <div className="xl:col-span-2">
              <StockChart />
            </div>

            {/* Strategy Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Quant Strategies</h2>
              <StrategyGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}