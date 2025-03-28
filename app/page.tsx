import Header from './components/Header';
import TestButton from './components/TestButton';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About the Test</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">What This Test Measures</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This test is designed to help you explore your preferences in BDSM dynamics and roles.
                It measures tendencies across multiple dimensions including dominance, submission, 
                sensation play, and more.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Through a series of thoughtfully crafted questions, we'll help you understand where
                your interests lie on the spectrum of BDSM preferences.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">How It Works</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The test consists of 25 questions that take approximately 5-7 minutes to complete.
                Your answers are analyzed to create a personalized profile showing your tendencies
                across different categories.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Results are private and stored only in your browser. We don't maintain a database of user responses.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <TestButton className="text-lg px-8 py-4" />
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Important Notice</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              This test is for educational and entertainment purposes only. All BDSM activities should be practiced
              with informed consent, proper safety measures, and clear communication between all parties involved.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              You must be 18 years or older to take this test. By proceeding, you confirm that you meet this age requirement.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Why Take This Test?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Self-Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gain insights into your preferences and interests in a safe, private environment.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use your results as a starting point for discussions with partners about desires and boundaries.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn more about different aspects of BDSM and receive personalized suggestions for further exploration.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/disclaimer" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
              Read our disclaimer and privacy policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}