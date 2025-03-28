'use client';

import { useEffect, useRef } from 'react';
import { ResultScore } from '@/lib/types';
import { formatCategoryName } from '@/lib/utils';

interface ResultsChartProps {
  scores: ResultScore[];
}

export default function ResultsChart({ scores }: ResultsChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const sortedScores = [...scores].sort((a, b) => b.percentage - a.percentage);
    
    // Clear previous contents
    chartRef.current.innerHTML = '';
    
    // Create chart elements
    sortedScores.forEach(score => {
      const barContainer = document.createElement('div');
      barContainer.className = 'mb-4';
      
      const labelContainer = document.createElement('div');
      labelContainer.className = 'flex justify-between mb-1';
      
      const label = document.createElement('span');
      label.className = 'text-base font-medium text-gray-800 dark:text-white';
      label.textContent = formatCategoryName(score.category);
      
      const percentage = document.createElement('span');
      percentage.className = 'text-sm font-medium text-gray-800 dark:text-white';
      percentage.textContent = `${score.percentage}%`;
      
      labelContainer.appendChild(label);
      labelContainer.appendChild(percentage);
      
      const progressContainer = document.createElement('div');
      progressContainer.className = 'w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700';
      
      const progressBar = document.createElement('div');
      progressBar.className = 'rounded-full h-4 transition-all duration-1000 ease-out';
      progressBar.style.width = '0%';
      
      // Choose color based on score category
      switch(score.category) {
        case 'dominant':
          progressBar.className += ' bg-blue-600';
          break;
        case 'submissive':
          progressBar.className += ' bg-pink-500';
          break;
        case 'sadist':
          progressBar.className += ' bg-red-600';
          break;
        case 'masochist':
          progressBar.className += ' bg-purple-500';
          break;
        case 'voyeur':
          progressBar.className += ' bg-green-500';
          break;
        case 'exhibitionist':
          progressBar.className += ' bg-yellow-500';
          break;
        case 'rope':
          progressBar.className += ' bg-indigo-500';
          break;
        case 'experimental':
          progressBar.className += ' bg-teal-500';
          break;
        default:
          progressBar.className += ' bg-gray-500';
      }
      
      progressContainer.appendChild(progressBar);
      barContainer.appendChild(labelContainer);
      barContainer.appendChild(progressContainer);
      
      if (chartRef.current) {
        chartRef.current.appendChild(barContainer);
      }
      
      // Animate the progress bar after a short delay
      setTimeout(() => {
        progressBar.style.width = `${score.percentage}%`;
      }, 100);
    });
  }, [scores]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Your BDSM Profile</h2>
      <div ref={chartRef} className="w-full"></div>
    </div>
  );
}