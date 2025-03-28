export type AnswerOption = {
    value: number;
    label: string;
  };
  
  export type Question = {
    id: number;
    text: string;
    type: 'single' | 'multiple' | 'likert';
    options: AnswerOption[];
    category: Category[];
  };
  
  export type Category = 
    | 'dominant' 
    | 'submissive' 
    | 'sadist' 
    | 'masochist' 
    | 'voyeur' 
    | 'exhibitionist' 
    | 'rope' 
    | 'experimental';
  
  export type TestAnswers = {
    [questionId: number]: number | number[];
  };
  
  export type ResultScore = {
    category: Category;
    score: number;
    percentage: number;
    description: string;
    suggestions: string[];
  };
  
  export type TestResult = {
    primaryRole: 'Dominant' | 'Submissive' | 'Switch' | 'Vanilla';
    scores: ResultScore[];
    timestamp: string;
  };