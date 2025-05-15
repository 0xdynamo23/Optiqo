import { AuthForm } from "@/components/auth/auth-form";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <div className="relative hidden w-full md:block md:w-1/2">
        <Image
          src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
          alt="Financial Analysis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm" />
        <div className="absolute bottom-8 left-8 max-w-md text-white">
          <h1 className="text-3xl font-bold">FinEdge</h1>
          <p className="mt-2 text-sm text-white/80">
            Helping you navigate the complex world of finance with elegant, powerful tools.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-8 md:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}