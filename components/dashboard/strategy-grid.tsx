import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sparkles, LineChart, BarChart2 } from "lucide-react";

const strategies = [
  {
    name: "Mean Reversion",
    description: "Capitalize on price deviations from historical averages",
    icon: TrendingUp,
    performance: "+18.5%",
    color: "bg-chart-1/10",
    textColor: "text-chart-1",
  },
  {
    name: "Momentum Trading",
    description: "Follow market trends using technical indicators",
    icon: LineChart,
    performance: "+22.3%",
    color: "bg-chart-2/10",
    textColor: "text-chart-2",
  },
  {
    name: "Statistical Arbitrage",
    description: "Profit from price differences using statistical models",
    icon: BarChart2,
    performance: "+15.7%",
    color: "bg-chart-3/10",
    textColor: "text-chart-3",
  },
  {
    name: "ML-Based Prediction",
    description: "AI-powered market movement predictions",
    icon: Sparkles,
    performance: "+20.1%",
    color: "bg-chart-4/10",
    textColor: "text-chart-4",
  },
];

export function StrategyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {strategies.map((strategy, index) => (
        <Card
          key={index}
          className={`p-6 hover:shadow-lg transition-shadow ${strategy.color}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <strategy.icon className={`h-5 w-5 ${strategy.textColor}`} />
                <h3 className="font-semibold">{strategy.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {strategy.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Annual Return</p>
                  <p className={`font-semibold ${strategy.textColor}`}>
                    {strategy.performance}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  Details <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
} 