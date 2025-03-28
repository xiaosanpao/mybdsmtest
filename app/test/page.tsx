'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/config/questions';
import { Question, TestAnswers, TestResult } from '@/lib/types';
import { calculateResults } from '@/lib/calculateResults';
import { saveResults } from '@/lib/utils';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

export default function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TestAnswers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const currentQuestion: Question = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Handle answer selection
  const handleAnswer = (questionId: number, value: number | number[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Move to next question
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  // Move to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Submit the test
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Calculate results
    const results: TestResult = calculateResults(questions, answers);
    
    // Save results to local storage
    saveResults(results);
    
    // Redirect to results page
    setTimeout(() => {
      router.push('/results');
    }, 1000);
  };

  // Check if current question is answered
  const isCurrentQuestionAnswered = () => {
    return answers[currentQuestion.id] !== undefined;
  };

  // Calculate overall completion percentage
  const calculateCompletionPercentage = () => {
    const answeredQuestions = Object.keys(answers).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        BDSM Preferences Test
      </h1>
      
      <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
        Answer each question honestly for the most accurate results. There are no right or wrong answers.
      </p>
      
      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={totalQuestions} 
      />
      
      <div className="mb-8 animate-fade-in">
        <QuestionCard 
          question={currentQuestion} 
          onAnswer={handleAnswer} 
          currentAnswer={answers[currentQuestion.id]}
        />
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-2 rounded-md font-medium ${
            currentQuestionIndex === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        
        {currentQuestionIndex < totalQuestions - 1 ? (
          <button
            onClick={handleNext}
            disabled={!isCurrentQuestionAnswered()}
            className={`px-6 py-2 rounded-md font-medium ${
              !isCurrentQuestionAnswered()
                ? 'bg-purple-300 text-white cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isCurrentQuestionAnswered() || isSubmitting}
            className={`px-6 py-2 rounded-md font-medium ${
              !isCurrentQuestionAnswered() || isSubmitting
                ? 'bg-purple-300 text-white cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {isSubmitting ? 'Processing...' : 'See Results'}
          </button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>Completion: {calculateCompletionPercentage()}%</span>
          <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
        </div>
      </div>
    </div>
  );
}