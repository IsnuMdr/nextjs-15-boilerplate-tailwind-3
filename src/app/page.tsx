import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="container flex max-w-3xl flex-col items-center justify-center gap-8 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-primary-700">Next.js 15 Boilerplate</h1>
        <p className="text-center text-lg text-gray-600">
          A modern boilerplate with Next.js 15, TypeScript, and Tailwind CSS
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </main>
  );
}
