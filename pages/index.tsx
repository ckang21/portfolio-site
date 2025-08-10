import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
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
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const TITLE = "Christian Kang — Software Engineer (Backend & Full Stack)";
  const DESCRIPTION =
    "Software Engineer focused on backend and full-stack systems. Selected work, impact highlights, and ways to get in touch.";
  return (
    <>
      <Head>
          <title>{TITLE}</title>
          <meta name="description" content={DESCRIPTION} />
          <link rel="canonical" href={SITE_URL} />

          {/* Open Graph */}
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${SITE_URL}/social-share.png`} />
      </Head>
      <section className="min-h-[70vh] flex items-start justify-center text-center px-4 pt-24 md:pt-32">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 tracking-tight">
            Christian Kang <span aria-hidden>👨‍💻</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-800">
            Software Engineer · Backend + Full Stack
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-lg mx-auto">
            Built Swagger-driven load tester (10× faster QA), streamlined AWS dataset management at Fortem, and improved data quality at Tesla.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/ckang21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/christian-kang30/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition shadow-sm"
            >
              Résumé
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
