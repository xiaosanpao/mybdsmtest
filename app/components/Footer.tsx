import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MyBDSMTest</h3>
            <p className="text-gray-400">
              A research-based quiz to help you explore your BDSM preferences.
              For educational and entertainment purposes only.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white transition duration-150">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/test" className="text-gray-400 hover:text-white transition duration-150">
                  Take the Test
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Information</h3>
            <p className="text-gray-400 mb-2">
              This test is for adults 18+ only.
            </p>
            <p className="text-gray-400">
              The content on this site is intended for educational and entertainment purposes only.
              It is not intended to serve as medical or psychological advice.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} MyBDSMTest. All rights reserved.</p>
          <p className="mt-1 text-sm">
            This site is for adults 18 years of age or older.
          </p>
        </div>
      </div>
    </footer>
  );
}