"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StrategyBuilder } from "@/components/dashboard/strategy-builder";
// import { StrategyPerformance } from "@/components/dashboard/strategy-performance";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const ComingSoon = dynamic(() => import("@/components/ui/coming-soon").then(mod => mod.ComingSoon), {
  ssr: false
});

export default function StratPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/dashboard");
  };

  return (
    <ComingSoon
      title="Strat - Strategic Trading Solutions"
      onClose={handleClose}
    />
  );
}