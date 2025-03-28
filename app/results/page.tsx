'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestResult } from '@/lib/types';
import { getResults } from '@/lib/utils';
import ResultsChart from '../components/ResultsChart';
import ResultsExplanation from '../components/ResultsExplanation';
import ShareResults from '../components/ShareResults';
import TestButton from '../components/TestButton';

export default function ResultsPage() {
  const [results, setResults] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if results exist in local storage
    const storedResults = getResults();
    
    if (storedResults) {
      setResults(storedResults);
    } else {
      // Redirect to test page if no results found
      router.push('/test');
    }
    
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2 mx-auto mb-6"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">No Results Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          You haven't taken the test yet, or your results have been cleared.
        </p>
        <TestButton text="Take the Test Now" className="px-8 py-3" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">
        Your BDSM Test Results
      </h1>
      
      <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
        Based on your responses, here's an analysis of your BDSM preferences and tendencies.
      </p>
      
      <ResultsChart scores={results.scores} />
      
      <ResultsExplanation 
        primaryRole={results.primaryRole} 
        scores={results.scores} 
      />
      
      <ShareResults results={results} />
      
      <div className="mt-12 text-center">
        <TestButton text="Take the Test Again" className="px-8" />
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Taking the test again will replace your current results.
        </p>
      </div>
    </div>
  );
}