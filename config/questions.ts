import { Question } from '../lib/types';

// Likert scale options (1-5)
const likertOptions = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' }
];

// Yes/No options
const yesNoOptions = [
  { value: 0, label: 'No' },
  { value: 5, label: 'Yes' }
];

// Frequency options
const frequencyOptions = [
  { value: 1, label: 'Never' },
  { value: 2, label: 'Rarely' },
  { value: 3, label: 'Sometimes' },
  { value: 4, label: 'Often' },
  { value: 5, label: 'Very Often' }
];

// Interest level options
const interestOptions = [
  { value: 1, label: 'Not Interested' },
  { value: 2, label: 'Slightly Interested' },
  { value: 3, label: 'Moderately Interested' },
  { value: 4, label: 'Very Interested' },
  { value: 5, label: 'Extremely Interested' }
];

export const questions: Question[] = [
  {
    id: 1,
    text: 'I enjoy taking charge in intimate scenarios.',
    type: 'likert',
    options: likertOptions,
    category: ['dominant']
  },
  {
    id: 2,
    text: 'I feel comfortable relinquishing control to a trusted partner.',
    type: 'likert',
    options: likertOptions,
    category: ['submissive']
  },
  {
    id: 3,
    text: 'I find pleasure in administering consensual intense sensations to a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['sadist']
  },
  {
    id: 4,
    text: 'I enjoy receiving consensual intense sensations from a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['masochist']
  },
  {
    id: 5,
    text: 'I am interested in observing consensual intimate activities between others.',
    type: 'likert',
    options: likertOptions,
    category: ['voyeur']
  },
  {
    id: 6,
    text: 'I am comfortable being observed by consenting others during intimate activities.',
    type: 'likert',
    options: likertOptions,
    category: ['exhibitionist']
  },
  {
    id: 7,
    text: 'I am interested in the artistic or functional aspects of rope work.',
    type: 'likert',
    options: likertOptions,
    category: ['rope']
  },
  {
    id: 8,
    text: 'I enjoy creating and enforcing rules within a relationship dynamic.',
    type: 'likert',
    options: likertOptions,
    category: ['dominant']
  },
  {
    id: 9,
    text: 'I enjoy following clearly defined rules within a relationship dynamic.',
    type: 'likert',
    options: likertOptions,
    category: ['submissive']
  },
  {
    id: 10,
    text: 'How interested are you in trying new intimate experiences?',
    type: 'likert',
    options: interestOptions,
    category: ['experimental']
  },
  {
    id: 11,
    text: 'I enjoy planning and directing intimate scenarios.',
    type: 'likert',
    options: likertOptions,
    category: ['dominant']
  },
  {
    id: 12,
    text: 'I am interested in being guided through intimate scenarios by a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['submissive']
  },
  {
    id: 13,
    text: 'I find pleasure in eliciting strong emotional or physical responses from a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['sadist', 'dominant']
  },
  {
    id: 14,
    text: 'I enjoy experiencing intense emotions or sensations guided by a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['masochist', 'submissive']
  },
  {
    id: 15,
    text: 'How interested are you in the concept of power exchange in relationships?',
    type: 'likert',
    options: interestOptions,
    category: ['dominant', 'submissive']
  },
  {
    id: 16,
    text: 'I enjoy watching expressions of pleasure on others\'faces.',
    type: 'likert',
    options: likertOptions,
    category: ['voyeur', 'dominant']
  },
  {
    id: 17,
    text: 'I enjoy knowing my reactions are being observed by a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['exhibitionist', 'submissive']
  },
  {
    id: 18,
    text: 'I am interested in the feeling of being artfully restrained.',
    type: 'likert',
    options: likertOptions,
    category: ['rope', 'submissive']
  },
  {
    id: 19,
    text: 'I am interested in the practice of artfully restraining a partner.',
    type: 'likert',
    options: likertOptions,
    category: ['rope', 'dominant']
  },
  {
    id: 20,
    text: 'How frequently do you like to try new approaches in intimate settings?',
    type: 'likert',
    options: frequencyOptions,
    category: ['experimental']
  },
  {
    id: 21,
    text: 'I am comfortable asserting my preferences and boundaries.',
    type: 'likert',
    options: likertOptions,
    category: ['dominant']
  },
  {
    id: 22,
    text: 'I enjoy the feeling of surrendering to trusted guidance.',
    type: 'likert',
    options: likertOptions,
    category: ['submissive']
  },
  {
    id: 23,
    text: "I find it arousing to safely push a partner's limits with their consent.",
    type: 'likert',
    options: likertOptions,
    category: ['sadist', 'dominant']
  },
  {
    id: 24,
    text: 'I enjoy having my limits safely explored with my consent.',
    type: 'likert',
    options: likertOptions,
    category: ['masochist', 'submissive']
  },
  {
    id: 25,
    text: 'I am open to incorporating new elements into intimate relationships.',
    type: 'likert',
    options: likertOptions,
    category: ['experimental']
  }
];