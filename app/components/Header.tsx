import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BDSM Test</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Discover your preferences and tendencies in BDSM dynamics through our
          comprehensive personality assessment.
        </p>
        <div className="mt-8">
          <Link 
            href="/test" 
            className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Take the Test
          </Link>
          <Link 
            href="/disclaimer" 
            className="ml-4 text-white border border-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </header>
  );
}