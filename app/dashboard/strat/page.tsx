import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StrategyBuilder } from "@/components/dashboard/strategy-builder";
import { StrategyPerformance } from "@/components/dashboard/strategy-performance";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function StratPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Strategy Builder</h1>
          <p className="text-muted-foreground">
            Create, backtest, and optimize trading strategies
          </p>
        </div>
        <div className="hidden md:block">
          <Button>Save Strategy</Button>
        </div>
      </div>
      
      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Strategy Builder Beta</AlertTitle>
        <AlertDescription>
          This feature is in beta. Backtest results are simulated and should not be used as financial advice.
        </AlertDescription>
      </Alert>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Strategy Parameters</CardTitle>
            <CardDescription>
              Configure your trading strategy parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StrategyBuilder />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
            <CardDescription>
              Recommended asset allocation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Large Cap Equities</span>
                  <span className="text-sm font-medium">40%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-chart-1" style={{ width: "40%" }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Mid Cap Equities</span>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-chart-2" style={{ width: "25%" }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Small Cap Equities</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-chart-3" style={{ width: "15%" }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Fixed Income</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-chart-4" style={{ width: "15%" }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Cash</span>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-chart-5" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Analysis</CardTitle>
            <CardDescription>
              Historical performance and key metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="performance">
              <TabsList className="mb-4">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
                <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
              </TabsList>
              <TabsContent value="performance">
                <StrategyPerformance />
              </TabsContent>
              <TabsContent value="risk">
                <div className="text-center py-8 text-muted-foreground">
                  Risk analysis data will be displayed here
                </div>
              </TabsContent>
              <TabsContent value="allocation">
                <div className="text-center py-8 text-muted-foreground">
                  Detailed asset allocation will be displayed here
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}