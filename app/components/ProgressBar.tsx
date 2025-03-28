interface ProgressBarProps {
    currentQuestion: number;
    totalQuestions: number;
  }
  
  export default function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
    const progress = Math.round((currentQuestion / totalQuestions) * 100);
    
    return (
      <div className="w-full mb-6">
        <div className="flex justify-between mb-1 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Question {currentQuestion} of {totalQuestions}</span>
          <span className="text-gray-500 dark:text-gray-400">{progress}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div 
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }