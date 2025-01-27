"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [count, router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6 py-8 rounded-[var(--radius)] bg-card/30 backdrop-blur-sm border border-border max-w-md w-full mx-4">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Loader className="w-16 h-16 text-primary animate-[spin_3s_linear_infinite]" />
        </div>

        {/* Error Code */}
        <h1 className="heading mb-4">
          404
        </h1>

        {/* Messages */}
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Oops! Looks like you've ventured into unknown territory.
        </p>

        {/* Countdown */}
        <div className="text-lg text-foreground">
          <span className="font-mono text-primary text-xl">{count}</span>
          <span className="ml-2">
            Redirecting to safety...
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 w-full bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-1000 ease-linear"
            style={{ 
              width: `${((3 - count) / 3) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
}