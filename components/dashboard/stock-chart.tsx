"use client";

import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Sample data generator with more realistic price movements
const generateData = (days: number, seed = 1) => {
  const data = [];
  let price = 18500; // Starting price for NIFTY
  let trend = 0.2; // Trend factor
  
  // Use a seeded random number generator
  const seededRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  
  for (let i = 0; i < days; i++) {
    const volatility = 0.5 + (seededRandom() * 0.5);
    const change = (seededRandom() - 0.5 + trend) * volatility * 50;
    price = Math.max(17000, Math.min(20000, price + change));
    
    const date = new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000);
    data.push({
      date: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      }),
      price: price.toFixed(2),
      volume: Math.floor(seededRandom() * 1000000 + 500000),
    });

    if (i % 5 === 0) {
      trend = (seededRandom() - 0.5) * 0.4;
    }
  }
  
  return data;
};

const timeframes = [
  { label: "1D", days: 1 },
  { label: "1W", days: 7 },
  { label: "1M", days: 30 },
  { label: "3M", days: 90 },
  { label: "1Y", days: 365 },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(price);
};

const calculateChange = (data: any[]) => {
  if (data.length < 2) return { value: 0, percentage: 0 };
  const firstPrice = parseFloat(data[0].price);
  const lastPrice = parseFloat(data[data.length - 1].price);
  const change = lastPrice - firstPrice;
  const percentage = (change / firstPrice) * 100;
  return {
    value: change,
    percentage: percentage,
  };
};

export function StockChart() {
  const [mounted, setMounted] = useState(false);
  const [activeTimeframe, setActiveTimeframe] = useState("1M");
  const [data, setData] = useState<any[]>([]);
  const change = calculateChange(data);
  const isPositive = change.value >= 0;

  useEffect(() => {
    setMounted(true);
    const days = timeframes.find(t => t.label === activeTimeframe)?.days || 30;
    setData(generateData(days));
  }, [activeTimeframe]);

  if (!mounted) {
    return (
      <Card className="p-6">
        <div className="h-[400px] w-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">NIFTY 50</h2>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold">
              {data.length > 0 ? formatPrice(parseFloat(data[data.length - 1].price)) : "Loading..."}
            </p>
            <motion.p
              key={change.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-medium ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {isPositive ? "+" : ""}
              {formatPrice(change.value)} ({isPositive ? "+" : ""}
              {change.percentage.toFixed(2)}%)
            </motion.p>
          </div>
        </div>
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <Button
              key={tf.label}
              variant={activeTimeframe === tf.label ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTimeframe(tf.label)}
              className="min-w-[48px]"
            >
              {tf.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-[400px] w-full">
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={`hsl(var(--chart-${isPositive ? "2" : "3"}))`}
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="95%"
                    stopColor={`hsl(var(--chart-${isPositive ? "2" : "3"}))`}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={10}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                domain={["auto", "auto"]}
                tickFormatter={(value) => formatPrice(value)}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  padding: "12px",
                }}
                formatter={(value: any) => [formatPrice(value), "Price"]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke={`hsl(var(--chart-${isPositive ? "2" : "3"}))`}
                fill="url(#colorPrice)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  stroke: `hsl(var(--chart-${isPositive ? "2" : "3"}))`,
                  strokeWidth: 2,
                  fill: "hsl(var(--background))",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  );
} 