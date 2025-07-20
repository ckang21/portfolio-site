import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-sm flex justify-between items-center">
      <div className="text-xl font-semibold text-gray-800">Christian Kang</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
        <Link href="/projects" className="text-gray-600 hover:text-black">Projects</Link>
        <Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          Résumé
        </a>
      </div>
    </nav>
  );
}
