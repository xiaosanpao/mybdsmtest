import { ResultScore } from '@/lib/types';
import { formatCategoryName } from '@/lib/utils';

interface ResultsExplanationProps {
  primaryRole: string;
  scores: ResultScore[];
}

export default function ResultsExplanation({ primaryRole, scores }: ResultsExplanationProps) {
  // Get top 3 scores
  const topScores = [...scores]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Understanding Your Results</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          Your Primary Role: <span className="text-purple-600">{primaryRole}</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {primaryRole === 'Dominant' && 
            "You tend to prefer taking control in intimate scenarios, guiding interactions and setting boundaries. You may enjoy giving instructions and making decisions for your partner with their consent."}
          {primaryRole === 'Submissive' && 
            "You tend to prefer yielding control in intimate scenarios, following instructions and allowing yourself to be guided. You may find freedom and pleasure in surrendering decision-making to a trusted partner."}
          {primaryRole === 'Switch' && 
            "You show a strong interest in both dominant and submissive roles, enjoying the flexibility to shift between taking control and yielding it depending on the situation, mood, or partner."}
          {primaryRole === 'Vanilla' && 
            "Your preferences indicate a lower interest in explicit power exchange dynamics. You may enjoy more conventional intimate interactions or may still be exploring your preferences."}
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Your Top Tendencies
        </h3>
        
        {topScores.map((score, index) => (
          <div key={score.category} className="mb-6 last:mb-0">
            <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">
              {index + 1}. {formatCategoryName(score.category)} ({score.percentage}%)
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {score.description}
            </p>
            
            <h5 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
              Suggestions:
            </h5>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              {score.suggestions.map((suggestion, i) => (
                <li key={i}>{suggestion}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-purple-800 dark:text-purple-100">
          Important Note
        </h3>
        <p className="text-purple-700 dark:text-purple-200">
          This test is for educational and entertainment purposes only. All intimate activities should be conducted with clear, enthusiastic consent from all involved parties, with proper safety measures, and open communication.
        </p>
      </div>
    </div>
  );
}