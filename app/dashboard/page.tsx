"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarketChart } from "@/components/dashboard/market-chart";
import { MarketNews } from "@/components/dashboard/market-news";
import { WatchList } from "@/components/dashboard/watch-list";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {session.user?.name || session.user?.email}</h1>
          <p className="text-muted-foreground">
            Analyze, track, and discover investment opportunities
          </p>
        </div>
        <div className="hidden md:block">
          <Button>Add to Watchlist</Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>
              Market performance for major indices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="1D">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="1D">1D</TabsTrigger>
                  <TabsTrigger value="1W">1W</TabsTrigger>
                  <TabsTrigger value="1M">1M</TabsTrigger>
                  <TabsTrigger value="3M">3M</TabsTrigger>
                  <TabsTrigger value="1Y">1Y</TabsTrigger>
                  <TabsTrigger value="5Y">5Y</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="1D">
                <MarketChart period="1D" />
              </TabsContent>
              <TabsContent value="1W">
                <MarketChart period="1W" />
              </TabsContent>
              <TabsContent value="1M">
                <MarketChart period="1M" />
              </TabsContent>
              <TabsContent value="3M">
                <MarketChart period="3M" />
              </TabsContent>
              <TabsContent value="1Y">
                <MarketChart period="1Y" />
              </TabsContent>
              <TabsContent value="5Y">
                <MarketChart period="5Y" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Watchlist</CardTitle>
            <CardDescription>
              Track your favorite stocks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WatchList />
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Market News</CardTitle>
            <CardDescription>
              Latest financial news and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MarketNews />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}