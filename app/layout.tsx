import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import AuthProvider from '@/components/providers/session-provider';
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/auth.config";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Optiqo - Modern Financial Platform',
  description: 'A modern financial platform connecting you to the best brokers',
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}