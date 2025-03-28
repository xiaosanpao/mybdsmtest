import Link from 'next/link';

interface TestButtonProps {
  text?: string;
  className?: string;
}

export default function TestButton({ 
  text = "Take the Test",
  className = "" 
}: TestButtonProps) {
  return (
    <Link 
      href="/test" 
      className={`inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors ${className}`}
    >
      {text}
    </Link>
  );
}