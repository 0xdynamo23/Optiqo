import { LandingHero } from '@/components/landing/hero';
import { LandingNavbar } from '@/components/landing/navbar';
import { LandingFooter } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingNavbar />
      <main className="flex-grow">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  );
}