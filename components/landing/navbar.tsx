"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ComingSoon = dynamic(() => import("@/components/ui/coming-soon").then(mod => mod.ComingSoon), {
  ssr: false
});

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonTitle, setComingSoonTitle] = useState("");

  const handleComingSoonClick = (title: string) => {
    setComingSoonTitle(title);
    setShowComingSoon(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <BarChart2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Optiqo</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="#features" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => handleComingSoonClick("Strat - Strategic Trading Solutions")}
            >
              Strat
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => handleComingSoonClick("For Developers - API & Integration")}
            >
              For Dev
            </Button>
            <Link 
              href="/careers" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Careers
            </Link>
            <Link 
              href="/team" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Our Team
            </Link>
            <Link href="/auth">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          </nav>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <nav className="flex flex-col gap-4">
                <Link 
                  href="#features" 
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#pricing" 
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="#about" 
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <button
                  className="block px-2 py-1 text-lg font-medium hover:text-primary text-left w-full"
                  onClick={() => handleComingSoonClick("Strat - Strategic Trading Solutions")}
                >
                  Strat
                </button>
                <button
                  className="block px-2 py-1 text-lg font-medium hover:text-primary text-left w-full"
                  onClick={() => handleComingSoonClick("For Developers - API & Integration")}
                >
                  For Dev
                </button>
                <Link 
                  href="/careers" 
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  href="/team" 
                  className="block px-2 py-1 text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  href="/auth" 
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full" size="lg">
                    Login
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <ComingSoon
          title={comingSoonTitle}
          onClose={() => setShowComingSoon(false)}
        />
      )}
    </>
  );
}