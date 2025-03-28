import Link from 'next/link';
import TestButton from '../components/TestButton';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Privacy Policy
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Data Collection & Storage</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Local Storage Only:</strong> Your test responses and results are stored exclusively in your device's 
          local storage (cookies/browser storage). We do not maintain a central database of user responses or results.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>No Personal Information Required:</strong> This test does not require you to provide any personally 
          identifying information such as your name, email address, or location.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Data Retention:</strong> Your test data remains in your browser's local storage until you clear your 
          browser cache or cookies. We have no ability to access, modify, or delete this data remotely.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies & Analytics</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Functional Cookies:</strong> We use essential cookies to store your test progress and results, 
          as well as your age verification status. These are necessary for the website to function properly.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Analytics:</strong> We may use anonymized analytics tools to understand general usage patterns 
          and improve the website experience. These tools do not connect your test results to any identifiable information.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Third-Party Services:</strong> This website uses Vercel for hosting and may incorporate their 
          analytics tools. Please refer to Vercel's privacy policy for details on how they handle anonymous usage data.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Results Sharing</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Optional Sharing:</strong> The site offers features to share your results through direct links or 
          social media. Using these features is entirely optional and under your control.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>What's Shared:</strong> When you use the sharing feature, only your category percentages and 
          primary role are shared. No raw responses to specific questions are included in shared results.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Third-Party Platforms:</strong> If you choose to share your results on social media or other 
          platforms, your data becomes subject to those platforms' privacy policies once shared.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Your Rights & Choices</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Data Control:</strong> Since all data is stored locally on your device, you have complete 
          control over it. You can clear this data at any time by clearing your browser cookies and local storage.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Cookie Consent:</strong> You can choose whether to accept cookies when prompted. Declining 
          non-essential cookies will not affect your ability to take the test.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Do Not Track:</strong> We respect browser "Do Not Track" signals where applicable to our 
          minimal analytics implementation.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Policy Updates</h2>
        <p className="text-gray-700 dark:text-gray-300">
          This privacy policy may be updated occasionally to reflect changes in our practices or for other 
          operational, legal, or regulatory reasons. We encourage you to review this page periodically for 
          the latest information on our privacy practices.
        </p>
      </div>
      
      <div className="text-center mt-12 space-y-4">
        <TestButton text="Take the Test" className="px-8" />
        <div>
          <Link href="/disclaimer" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
            View our Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}