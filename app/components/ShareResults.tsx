'use client';

import { useState } from 'react';
import { TestResult } from '@/lib/types';
import { generateShareText } from '@/lib/utils';

interface ShareResultsProps {
  results: TestResult;
}

export default function ShareResults({ results }: ShareResultsProps) {
  const [copied, setCopied] = useState(false);
  
  const shareText = generateShareText(results);
  
  const handleCopyToClipboard = async () => {
    try {
      // Check if the Clipboard API is available
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } else {
        // Fallback for browsers without Clipboard API support
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        textArea.style.position = 'fixed';  // Avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          const successful = document.execCommand('copy');
          setCopied(successful);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        } catch (err) {
          console.error('Fallback: Could not copy text: ', err);
          alert('Copy failed. Please copy the text manually.');
        }
        
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'My BDSM Test Results',
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    } else {
      handleCopyToClipboard();
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Share Your Results</h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Want to share your results with others? Use the buttons below.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleCopyToClipboard}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          {copied ? 'Copied!' : 'Copy Results'}
        </button>
        
        <button
          onClick={handleShare}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          Share Results
        </button>
      </div>
    </div>
  );
}