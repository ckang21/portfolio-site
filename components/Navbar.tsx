import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-sm flex justify-between items-center">
      <div className="text-xl font-semibold text-gray-800">Christian Kang</div>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Résumé
        </a>
      </div>
    </nav>
  );
}
