import React, { useState, useEffect } from 'react';
import { GitBranch, Star, Code, ExternalLink } from 'lucide-react';

// Hardcoded list of repository names
const REPO_NAMES = [
  'llm-powered-microservice-template',
  'drf_api_project_template',
  'fastapi-microservice-template',
  'master_python_thinking',
  // Add more repository names as needed
];

const determineTechStack = (repo) => {
  const topics = repo.topics || [];
  const language = repo.language;

  if (topics.includes('react') || language === 'JavaScript') return 'Frontend';
  if (topics.includes('nodejs') || language === 'TypeScript' || language === 'Python') return 'Backend/Microservice Projects';
  if (topics.includes('llm') || topics.includes('llm-apps')) return 'LLM Powered Applications';
  if (topics.includes('android') || language === 'Java') return 'Mobile';
  if (topics.includes('docker') || topics.includes('kubernetes')) return 'DevOps';
  return 'Other';
};

const ProjectCard = ({ project }) => (
  <div className="border rounded-lg p-4 bg-white shadow-sm">
    <h4 className="text-xl font-semibold mb-2">
      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {project.name}
      </a>
    </h4>
    <p className="text-gray-600 mb-3">{project.description}</p>
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
      {project.language && (
        <span className="flex items-center">
          <Code size={16} className="mr-1" />
          {project.language}
        </span>
      )}
      <span className="flex items-center">
        <Star size={16} className="mr-1" />
        {project.stargazers_count}
      </span>
      <span className="flex items-center">
        <GitBranch size={16} className="mr-1" />
        {project.forks_count}
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {project.topics.map(topic => (
        <span key={topic} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {topic}
        </span>
      ))}
    </div>
  </div>
);

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const projectPromises = REPO_NAMES.map(name =>
          fetch(`https://api.github.com/repos/onlythompson/${name}`).then(res => {
            if (!res.ok) throw new Error(`Error fetching ${name}`);
            return res.json();
          })
        );
        const projectsData = await Promise.all(projectPromises);
        const classifiedProjects = projectsData.map(repo => ({
          ...repo,
          techStack: determineTechStack(repo)
        }));
        setProjects(classifiedProjects);
      } catch (err) {
        setError('Failed to fetch some projects. Please try again later.');
        console.error('Error fetching GitHub projects:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const groupedProjects = projects.reduce((acc, project) => {
    (acc[project.techStack] = acc[project.techStack] || []).push(project);
    return acc;
  }, {});

  if (isLoading) return <div className="text-center">Loading projects...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="space-y-8">
      {Object.entries(groupedProjects).map(([techStack, stackProjects]) => (
        <div key={techStack}>
          <h3 className="text-2xl font-bold mb-4">{techStack}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stackProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
      <div className="text-center mt-6">
        <a 
          href="https://github.com/onlythompson" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          View more on GitHub <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default GitHubProjects;