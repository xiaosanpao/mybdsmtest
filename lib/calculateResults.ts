import { Category, Question, TestAnswers, ResultScore, TestResult } from './types';
import { determinePrimaryRole } from './utils';

const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  dominant: 'You enjoy taking control during intimate scenarios, guiding interactions, and making decisions. You may enjoy giving instructions and setting boundaries for your partner.',
  submissive: 'You enjoy yielding control in intimate scenarios, following instructions, and allowing yourself to be guided. You may find freedom and pleasure in surrendering decision-making to a trusted partner.',
  sadist: 'You derive pleasure from consensually administering physical sensations or psychological scenarios that create intense feelings in your partner within agreed boundaries.',
  masochist: 'You derive pleasure from receiving intense physical sensations or engaging in psychological scenarios that create powerful feelings within agreed boundaries.',
  voyeur: 'You enjoy watching others engaged in intimate activities with their consent. The visual aspect of intimacy is particularly appealing to you.',
  exhibitionist: 'You enjoy being observed by consenting others during intimate activities. Being seen and appreciated can heighten your experience.',
  rope: 'You have an interest in rope work, whether artistic, restrictive, or both. This may involve intricate patterns, gentle restraint, or the aesthetics of rope against skin.',
  experimental: "You're open to trying new experiences and scenarios. Exploration and discovery are important aspects of your intimate preferences."
};

const CATEGORY_SUGGESTIONS: Record<Category, string[]> = {
  dominant: [
    'Learn about communication techniques and setting clear boundaries',
    'Study safe practices and consent frameworks',
    'Practice negotiation skills with partners',
    'Consider reading guides on responsible leadership in BDSM contexts'
  ],
  submissive: [
    'Learn about personal boundary setting and communication',
    'Practice using safe words and signals',
    'Understand the importance of aftercare needs',
    'Consider joining supportive communities to share experiences'
  ],
  sadist: [
    'Study anatomy and safe impact techniques',
    'Learn about emotional care before and after intense scenes',
    'Understand risk awareness for various activities',
    'Practice graduated intensity and reading partner responses'
  ],
  masochist: [
    'Understand your physical limits and communicate them clearly',
    'Learn about safe endorphin management and drop',
    'Practice mindfulness during intense sensations',
    'Consider keeping a journal of responses and recovery times'
  ],
  voyeur: [
    'Always prioritize consent when observing others',
    'Learn about ethical voyeurism and appropriate settings',
    'Respect privacy and boundaries in all contexts',
    'Consider exploring visual media created with consent'
  ],
  exhibitionist: [
    'Always ensure all observers have consented',
    'Learn about appropriate venues and contexts',
    'Understand legal considerations in various settings',
    'Practice graduated comfort levels with trusted partners first'
  ],
  rope: [
    'Learn about safe rope materials and techniques',
    'Study anatomy to avoid nerve compression',
    'Practice emergency release methods',
    'Consider attending workshops taught by experienced practitioners'
  ],
  experimental: [
    'Establish clear communication protocols when trying new things',
    'Research thoroughly before attempting unfamiliar activities',
    'Start with lower intensity versions of activities',
    'Debrief thoroughly after new experiences to refine preferences'
  ]
};

/**
 * Calculate the test results based on user answers
 */
export function calculateResults(questions: Question[], answers: TestAnswers): TestResult {
  // Initialize scores for each category
  const categoryScores: Record<Category, number> = {
    dominant: 0,
    submissive: 0,
    sadist: 0,
    masochist: 0,
    voyeur: 0,
    exhibitionist: 0,
    rope: 0,
    experimental: 0
  };
  
  // Count questions per category for averaging
  const categoryQuestionCounts: Record<Category, number> = {
    dominant: 0,
    submissive: 0,
    sadist: 0,
    masochist: 0,
    voyeur: 0,
    exhibitionist: 0,
    rope: 0,
    experimental: 0
  };

  // Calculate raw scores
  questions.forEach(question => {
    const answer = answers[question.id];
    
    // Skip if unanswered
    if (answer === undefined) return;
    
    question.category.forEach(category => {
      categoryQuestionCounts[category]++;
      
      if (Array.isArray(answer)) {
        // For multiple choice, sum all selected values
        categoryScores[category] += answer.reduce((sum, val) => sum + val, 0);
      } else {
        // For single choice or likert, add the value
        categoryScores[category] += answer;
      }
    });
  });

  // Calculate percentages and create result scores
  const scores: ResultScore[] = Object.entries(categoryScores).map(([category, score]) => {
    const cat = category as Category;
    const count = categoryQuestionCounts[cat];
    const maxPossibleScore = count * 5; // Assuming 5 is max score per question
    const percentage = count > 0 ? Math.round((score / maxPossibleScore) * 100) : 0;
    
    return {
      category: cat,
      score: score,
      percentage: percentage,
      description: CATEGORY_DESCRIPTIONS[cat],
      suggestions: CATEGORY_SUGGESTIONS[cat]
    };
  });

  // Sort scores by percentage (highest first)
  scores.sort((a, b) => b.percentage - a.percentage);

  // Determine primary role
  const primaryRole = determinePrimaryRole(scores);

  return {
    primaryRole,
    scores,
    timestamp: new Date().toISOString()
  };
}