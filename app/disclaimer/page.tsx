import Link from 'next/link';
import TestButton from '../components/TestButton';

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Disclaimer & Terms of Use
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Age Restriction</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This website and test are exclusively intended for adults who are 18 years of age or older. 
          By using this website, you confirm that you are at least 18 years old and have the legal capacity 
          to access adult-oriented content in your jurisdiction.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          If you are under 18 years of age, please leave this website immediately.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Purpose & Limitations</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The BDSM Test provided on this website is designed for educational and entertainment purposes only. 
          It is not a psychological assessment, medical diagnostic tool, or professional advice service.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The test results are not scientifically validated and should not be used as the sole basis for 
          making decisions about your relationships, sexual practices, or personal safety.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We strongly recommend consulting with qualified professionals for any matters related to 
          your physical or mental health, relationships, or personal safety.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Safety & Consent</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          All BDSM activities should be practiced only between consenting adults with proper safety measures 
          in place. This includes, but is not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Obtaining explicit, informed consent from all parties involved</li>
          <li>Establishing safe words and boundaries before engaging in any activities</li>
          <li>Ensuring all participants have the capacity to give consent</li>
          <li>Taking proper safety precautions appropriate to the activity</li>
          <li>Communicating openly before, during, and after activities</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          We do not endorse or encourage any illegal activities or practices that cause harm to oneself or others.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Liability Disclaimer</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The creators, owners, and operators of this website assume no responsibility or liability for how 
          users interpret or apply the information presented herein.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By using this website and taking the test, you acknowledge and agree that you are solely responsible 
          for your actions and decisions related to BDSM activities.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We make no warranties or representations about the accuracy, reliability, completeness, or timeliness 
          of the content provided on this website.
        </p>
      </div>
      
      <div className="text-center mt-12 space-y-4">
        <TestButton text="I Understand, Take the Test" className="px-8" />
        <div>
          <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
            View our Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}