"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "Fed Signals Potential Rate Cuts as Inflation Cools",
    source: "Financial Times",
    timestamp: new Date(Date.now() - 3600000),
    category: "Economy",
    summary: "The Federal Reserve has indicated it may consider interest rate cuts in the coming months as inflation data shows signs of cooling."
  },
  {
    id: 2,
    title: "Tech Stocks Rally on Strong Earnings Reports",
    source: "Wall Street Journal",
    timestamp: new Date(Date.now() - 7200000),
    category: "Markets",
    summary: "Technology stocks surged today following better-than-expected earnings reports from several major companies in the sector."
  },
  {
    id: 3,
    title: "New Regulations Proposed for Cryptocurrency Markets",
    source: "Bloomberg",
    timestamp: new Date(Date.now() - 10800000),
    category: "Regulation",
    summary: "Regulatory agencies have proposed new frameworks for cryptocurrency oversight, aiming to increase consumer protection while allowing for innovation."
  },
  {
    id: 4,
    title: "Oil Prices Stabilize Despite Middle East Tensions",
    source: "Reuters",
    timestamp: new Date(Date.now() - 14400000),
    category: "Commodities",
    summary: "Oil markets have shown surprising stability despite ongoing tensions in the Middle East, with prices holding steady in recent trading sessions."
  },
  {
    id: 5,
    title: "Housing Market Shows Signs of Cooling After Record Highs",
    source: "CNBC",
    timestamp: new Date(Date.now() - 18000000),
    category: "Real Estate",
    summary: "The housing market appears to be slowing down after months of record-breaking prices, with new data showing decreased sales volumes and longer listing times."
  }
];

export function MarketNews() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", "Economy", "Markets", "Regulation", "Commodities", "Real Estate"];
  
  const filteredNews = activeCategory === "All" 
    ? mockNews 
    : mockNews.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <div key={item.id} className="group rounded-lg border border-border p-4 transition-all hover:border-foreground/20 hover:bg-accent/50">
            <div className="flex justify-between">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {item.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {format(item.timestamp, "MMM d, h:mm a")}
              </span>
            </div>
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Source: {item.source}</span>
              <Button variant="ghost" size="sm" className="h-8 gap-1 p-0 text-xs text-primary group-hover:translate-x-1 transition-transform">
                Read more <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}