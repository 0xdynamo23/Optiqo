"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, Plus, Save, Trash2 } from "lucide-react";

export function StrategyBuilder() {
  const [strategyType, setStrategyType] = useState("momentum");
  const [lookbackPeriod, setLookbackPeriod] = useState(20);
  const [riskTolerance, setRiskTolerance] = useState(50);
  const [autoRebalance, setAutoRebalance] = useState(true);

  return (
    <Tabs defaultValue="basic" className="space-y-4">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
        <TabsTrigger value="rules">Rules</TabsTrigger>
      </TabsList>
      
      <TabsContent value="basic" className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="strategy-name">Strategy Name</Label>
            <Input id="strategy-name" placeholder="My Custom Strategy" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="strategy-type">Strategy Type</Label>
            <Select value={strategyType} onValueChange={setStrategyType}>
              <SelectTrigger id="strategy-type">
                <SelectValue placeholder="Select strategy type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="momentum">Momentum</SelectItem>
                <SelectItem value="value">Value</SelectItem>
                <SelectItem value="growth">Growth</SelectItem>
                <SelectItem value="mean-reversion">Mean Reversion</SelectItem>
                <SelectItem value="trend-following">Trend Following</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Lookback Period (Days)</Label>
          <div className="flex items-center space-x-4">
            <Slider
              value={[lookbackPeriod]}
              min={5}
              max={60}
              step={5}
              onValueChange={(value) => setLookbackPeriod(value[0])}
              className="flex-1"
            />
            <span className="w-12 text-center">{lookbackPeriod}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Risk Tolerance</Label>
          <div className="flex items-center space-x-4">
            <Slider
              value={[riskTolerance]}
              min={10}
              max={90}
              step={10}
              onValueChange={(value) => setRiskTolerance(value[0])}
              className="flex-1"
            />
            <span className="w-12 text-center">{riskTolerance}%</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-rebalance"
            checked={autoRebalance}
            onCheckedChange={setAutoRebalance}
          />
          <Label htmlFor="auto-rebalance">Auto Rebalance</Label>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="initial-investment">Initial Investment</Label>
            <Input id="initial-investment" placeholder="$10,000" type="number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="investment-horizon">Investment Horizon</Label>
            <Select defaultValue="5-years">
              <SelectTrigger id="investment-horizon">
                <SelectValue placeholder="Select time horizon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-year">1 Year</SelectItem>
                <SelectItem value="3-years">3 Years</SelectItem>
                <SelectItem value="5-years">5 Years</SelectItem>
                <SelectItem value="10-years">10 Years</SelectItem>
                <SelectItem value="20-years">20+ Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline">Reset</Button>
          <Button className="gap-1">
            <PlayCircle className="h-4 w-4" />
            Run Backtest
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="advanced" className="space-y-4">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="max-drawdown">Max Drawdown</Label>
              <Input id="max-drawdown" placeholder="20%" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="profit-target">Profit Target</Label>
              <Input id="profit-target" placeholder="15%" />
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="volatility-target">Volatility Target</Label>
              <Input id="volatility-target" placeholder="12%" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sharpe-ratio">Min Sharpe Ratio</Label>
              <Input id="sharpe-ratio" placeholder="1.0" />
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="rebalancing-frequency">Rebalancing Frequency</Label>
              <Select defaultValue="quarterly">
                <SelectTrigger id="rebalancing-frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tax-efficiency">Tax Efficiency</Label>
              <Select defaultValue="moderate">
                <SelectTrigger id="tax-efficiency">
                  <SelectValue placeholder="Select tax strategy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="rules" className="space-y-4">
        <div className="space-y-4">
          <div className="rounded-md border border-border p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Buy Rule 1</h4>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 grid gap-4 md:grid-cols-3">
              <Select defaultValue="rsi">
                <SelectTrigger>
                  <SelectValue placeholder="Select indicator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rsi">RSI</SelectItem>
                  <SelectItem value="macd">MACD</SelectItem>
                  <SelectItem value="moving-avg">Moving Average</SelectItem>
                  <SelectItem value="bollinger">Bollinger Bands</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="less-than">
                <SelectTrigger>
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="greater-than">Greater Than</SelectItem>
                  <SelectItem value="less-than">Less Than</SelectItem>
                  <SelectItem value="crosses-above">Crosses Above</SelectItem>
                  <SelectItem value="crosses-below">Crosses Below</SelectItem>
                </SelectContent>
              </Select>
              
              <Input placeholder="30" />
            </div>
          </div>
          
          <div className="rounded-md border border-border p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Sell Rule 1</h4>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 grid gap-4 md:grid-cols-3">
              <Select defaultValue="rsi">
                <SelectTrigger>
                  <SelectValue placeholder="Select indicator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rsi">RSI</SelectItem>
                  <SelectItem value="macd">MACD</SelectItem>
                  <SelectItem value="moving-avg">Moving Average</SelectItem>
                  <SelectItem value="bollinger">Bollinger Bands</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="greater-than">
                <SelectTrigger>
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="greater-than">Greater Than</SelectItem>
                  <SelectItem value="less-than">Less Than</SelectItem>
                  <SelectItem value="crosses-above">Crosses Above</SelectItem>
                  <SelectItem value="crosses-below">Crosses Below</SelectItem>
                </SelectContent>
              </Select>
              
              <Input placeholder="70" />
            </div>
          </div>
          
          <Button variant="outline" className="w-full gap-1">
            <Plus className="h-4 w-4" /> Add Rule
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}