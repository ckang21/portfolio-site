import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'Load Tester',
    description: 'Automatically tests API load from Swagger definitions.',
    tech: ['TypeScript', 'Swagger', 'CI/CD'],
    github: 'https://github.com/your-username/load-tester',
    demo: '#',
  },
  {
    title: 'Sudoku Solver',
    description: 'Solves Sudoku puzzles using Go.',
    tech: ['Go', 'Algorithms'],
    github: 'https://github.com/your-username/sudoku-solver',
    demo: '#',
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
