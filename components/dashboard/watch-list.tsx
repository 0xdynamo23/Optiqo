"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Trash2, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock watchlist data
const mockWatchlistItems = [
  { id: 1, symbol: "AAPL", name: "Apple Inc.", price: 182.52, change: 1.24, changePercent: 0.68 },
  { id: 2, symbol: "MSFT", name: "Microsoft Corp.", price: 331.83, change: -2.17, changePercent: -0.65 },
  { id: 3, symbol: "GOOGL", name: "Alphabet Inc.", price: 124.46, change: 0.87, changePercent: 0.70 },
  { id: 4, symbol: "AMZN", name: "Amazon.com Inc.", price: 132.83, change: -0.64, changePercent: -0.48 },
  { id: 5, symbol: "TSLA", name: "Tesla Inc.", price: 246.53, change: 4.78, changePercent: 1.97 },
];

export function WatchList() {
  const [watchlist, setWatchlist] = useState(mockWatchlistItems);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatchlist = watchlist.filter(
    (item) =>
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search symbols..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        {filteredWatchlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-md border border-border p-2 hover:bg-accent/50"
          >
            <div className="flex items-center space-x-3">
              <div className="font-medium">{item.symbol}</div>
              <div className="text-xs text-muted-foreground">{item.name}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="font-medium">${item.price.toFixed(2)}</div>
                <div
                  className={cn(
                    "flex items-center gap-1 text-xs",
                    item.change >= 0 ? "text-chart-1" : "text-destructive"
                  )}
                >
                  {item.change >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {item.change >= 0 ? "+" : ""}
                  {item.change.toFixed(2)} ({item.change >= 0 ? "+" : ""}
                  {item.changePercent.toFixed(2)}%)
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="mt-4 w-full justify-start">
          <Plus className="mr-2 h-4 w-4" />
          Add Symbol
        </Button>
      </div>
    </div>
  );
}