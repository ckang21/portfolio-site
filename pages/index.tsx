import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-green-600">Christian Kang 👨‍💻</h1>
      <p className="mt-2 text-lg text-gray-700">Software Engineer · Backend + Full Stack</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="text-blue-500 underline">GitHub</a>
        <a href="#" className="text-blue-500 underline">LinkedIn</a>
        <a href="#" className="text-blue-500 underline">Résumé</a>
      </div>
    </div>
  );
}
