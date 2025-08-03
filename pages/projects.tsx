import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'Sudoku Solver',
    description: 'Solves Sudoku puzzles using Go.',
    tech: ['Go', 'Algorithms'],
    github: 'https://github.com/ckang21/sudoku-solver',
    demo: '#',
  },
  {
    title: 'Risk Score API',
    description: 'Go backend that returns a mock risk score based on name input.',
    tech: ['Go', 'net/http', 'Logging'],
    github: 'https://github.com/ckang21/portfolio-site/tree/main/backend',
    demo: 'http://localhost:8080/api/risk-score?name=Jeffrey'
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid gap-6">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </main>
    </>
  );
}
