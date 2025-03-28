import { Category, ResultScore, TestResult } from './types';

/**
 * Saves test results to local storage
 */
export function saveResults(results: TestResult): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bdsmTestResults', JSON.stringify(results));
  }
}

/**
 * Retrieves test results from local storage
 */
export function getResults(): TestResult | null {
  if (typeof window !== 'undefined') {
    const results = localStorage.getItem('bdsmTestResults');
    return results ? JSON.parse(results) : null;
  }
  return null;
}

/**
 * Generates a shareable text message based on test results
 */
export function generateShareText(results: TestResult): string {
  const topThree = results.scores
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3)
    .map(score => `${formatCategoryName(score.category)}: ${score.percentage}%`)
    .join(', ');

  return `I just took the BDSM Test and my top results are: ${topThree}. I'm primarily a ${results.primaryRole}! Take your test at mybdsmtest.org`;
}

/**
 * Formats category name for display
 */
export function formatCategoryName(category: Category): string {
  const formatted = category.charAt(0).toUpperCase() + category.slice(1);
  return formatted;
}

/**
 * Determines primary role based on scores
 */
export function determinePrimaryRole(scores: ResultScore[]): 'Dominant' | 'Submissive' | 'Switch' | 'Vanilla' {
  const dominant = scores.find(s => s.category === 'dominant')?.percentage || 0;
  const submissive = scores.find(s => s.category === 'submissive')?.percentage || 0;
  
  if (dominant < 30 && submissive < 30) {
    return 'Vanilla';
  } else if (dominant >= 50 && submissive >= 50) {
    return 'Switch';
  } else if (dominant > submissive) {
    return 'Dominant';
  } else {
    return 'Submissive';
  }
}

/**
 * Validates user age from local storage
 */
export function isAgeVerified(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('ageVerified') === 'true';
  }
  return false;
}

/**
 * Sets the age verification status in local storage
 */
export function setAgeVerified(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ageVerified', 'true');
  }
}