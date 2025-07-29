type ProjectProps = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
  };
  
  export default function ProjectCard({ title, description, tech, github, demo }: ProjectProps) {
    return (
      <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="text-sm text-gray-500 mb-2">
          Tech: {tech.join(', ')}
        </div>
        <div className="space-x-4">
          <a href={github} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={demo} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    );
  }
  