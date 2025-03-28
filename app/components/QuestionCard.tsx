'use client';

import { useState, useEffect } from 'react';
import { Question, AnswerOption } from '@/lib/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (id: number, value: number | number[]) => void;
  currentAnswer: number | number[] | undefined;
}

export default function QuestionCard({ question, onAnswer, currentAnswer }: QuestionCardProps) {
  const [selectedValues, setSelectedValues] = useState<number[]>([]);

  // Initialize selected values from current answer
  useEffect(() => {
    if (currentAnswer !== undefined) {
      if (Array.isArray(currentAnswer)) {
        setSelectedValues(currentAnswer);
      } else {
        setSelectedValues([currentAnswer]);
      }
    } else {
      setSelectedValues([]);
    }
  }, [currentAnswer, question.id]);

  const handleSingleSelect = (value: number) => {
    setSelectedValues([value]);
    onAnswer(question.id, value);
  };

  const handleMultipleSelect = (value: number) => {
    let newValues: number[];
    
    if (selectedValues.includes(value)) {
      // Remove value if already selected
      newValues = selectedValues.filter(v => v !== value);
    } else {
      // Add value if not already selected
      newValues = [...selectedValues, value];
    }
    
    setSelectedValues(newValues);
    onAnswer(question.id, newValues);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {question.text}
      </h3>
      
      <div className="space-y-3">
        {question.type === 'likert' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {question.options.map((option: AnswerOption) => (
              <button
                key={option.value}
                onClick={() => handleSingleSelect(option.value)}
                className={`p-3 rounded-md border text-center transition-colors ${
                  selectedValues.includes(option.value)
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        
        {question.type === 'single' && (
          <div className="space-y-2">
            {question.options.map((option: AnswerOption) => (
              <button
                key={option.value}
                onClick={() => handleSingleSelect(option.value)}
                className={`w-full p-3 rounded-md border text-left transition-colors ${
                  selectedValues.includes(option.value)
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        
        {question.type === 'multiple' && (
          <div className="space-y-2">
            {question.options.map((option: AnswerOption) => (
              <button
                key={option.value}
                onClick={() => handleMultipleSelect(option.value)}
                className={`w-full p-3 rounded-md border text-left transition-colors ${
                  selectedValues.includes(option.value)
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 flex-shrink-0 rounded border mr-3 flex items-center justify-center ${
                    selectedValues.includes(option.value)
                      ? 'bg-white border-white'
                      : 'border-gray-400'
                  }`}>
                    {selectedValues.includes(option.value) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  {option.label}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}