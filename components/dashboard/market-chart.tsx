"use client";

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { Card } from "@/components/ui/card";

interface MarketChartProps {
  period: "1D" | "1W" | "1M" | "3M" | "1Y" | "5Y";
}

// Mock data
const generateMockData = (period: string) => {
  // Generate different data based on the period
  const dataPoints = period === "1D" ? 24 : 
                    period === "1W" ? 7 : 
                    period === "1M" ? 30 : 
                    period === "3M" ? 12 : 
                    period === "1Y" ? 12 : 24;
                    
  const baseValue1 = 100 + Math.random() * 50;
  const baseValue2 = 150 + Math.random() * 50;
  const baseValue3 = 80 + Math.random() * 40;
  
  return Array.from({ length: dataPoints }).map((_, i) => {
    const dayValue = i + 1;
    return {
      name: period === "1D" ? `${dayValue}h` : 
            period === "1W" ? `Day ${dayValue}` : 
            period === "1M" ? `Day ${dayValue}` : 
            period === "3M" ? `Week ${dayValue}` : 
            period === "1Y" ? `Month ${dayValue}` : `Month ${dayValue}`,
      S_P: baseValue1 + Math.sin(i / 3) * 20 + Math.random() * 10,
      NASDAQ: baseValue2 + Math.sin(i / 4) * 25 + Math.random() * 15,
      DOW: baseValue3 + Math.cos(i / 5) * 15 + Math.random() * 8,
    };
  });
};

export function MarketChart({ period }: MarketChartProps) {
  const data = generateMockData(period);

  return (
    <Card className="mt-4 p-4">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              tickMargin={10}
              axisLine={{ stroke: "#888", strokeWidth: 1 }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickMargin={10}
              axisLine={{ stroke: "#888", strokeWidth: 1 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              labelStyle={{
                color: "hsl(var(--card-foreground))",
                fontWeight: "bold",
                margin: "0 0 4px 0",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="S_P"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name="S&P 500"
            />
            <Line
              type="monotone"
              dataKey="NASDAQ"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name="NASDAQ"
            />
            <Line
              type="monotone"
              dataKey="DOW"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name="DOW"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}