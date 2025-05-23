"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  BarChart2, 
  Search, 
  LineChart, 
  Code, 
  Settings,
  Bell,
  Menu,
  X
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      href: "/dashboard",
      label: "Explore",
      icon: Search,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/strat",
      label: "Strat",
      icon: LineChart,
      active: pathname === "/dashboard/strat",
    },
    {
      href: "/dashboard/for-dev",
      label: "For Dev",
      icon: Code,
      active: pathname === "/dashboard/for-dev",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Optiqo</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            {routes.map((route, i) => (
              <Link 
                key={i} 
                href={route.href}
                className={cn(
                  "group flex items-center gap-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  route.active ? 
                    "bg-primary/10 text-primary" : 
                    "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <route.icon className={cn("h-4 w-4")} />
                {route.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <nav className="flex flex-col gap-4 py-4">
                  {routes.map((route, i) => (
                    <Link 
                      key={i} 
                      href={route.href}
                      className={cn(
                        "flex items-center gap-x-2 px-3 py-2 text-base font-medium rounded-md transition-colors",
                        route.active ? 
                          "bg-primary/10 text-primary" : 
                          "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <route.icon className={cn("h-5 w-5")} />
                      {route.label}
                    </Link>
                  ))}
                  
                  <div className="mt-4 border-t border-border/60 pt-4">
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      <Bell className="h-5 w-5" />
                      Notifications
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings className="h-5 w-5" />
                      Settings
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <main className="flex-1">{children}</main>
    </div>
  );
}