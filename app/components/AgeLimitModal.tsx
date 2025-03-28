'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAgeVerified, setAgeVerified } from '@/lib/utils';

export default function AgeLimitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already verified age
    if (!isAgeVerified()) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    setAgeVerified();
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirect to a safe site
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Age Verification Required</h2>
        
        <div className="mb-6 text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            This website contains mature content related to BDSM and intimate relationships.
            You must be at least 18 years old to proceed.
          </p>
          <p>
            By continuing, you confirm that you are at least 18 years old and are legally
            permitted to access such content in your jurisdiction.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            I am under 18
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            I am 18 or older
          </button>
        </div>
      </div>
    </div>
  );
}