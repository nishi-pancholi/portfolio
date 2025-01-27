// app/not-found.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center flex-col p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-md">Redirecting you to the homepage in 3 seconds...</p>
    </div>
  );
}