import React from 'react';
import { Code, GitBranch, Zap, User, Star } from 'lucide-react';

const OSProject = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.overview}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Zap className="mr-2 text-teal-500" size={20} />
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Code className="mr-2 text-teal-500" size={20} />
            Technical Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technicalStack.map((tech, index) => (
              <span key={index} className="bg-blue-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <GitBranch className="mr-2 text-teal-500" size={20} />
            Challenges and Solutions:
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.challengesAndSolutions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Star className="mr-2 text-teal-500" size={20} />
            Impact and Results:
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.impactAndResults.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <User className="mr-2 text-teal-500" size={20} />
            Skills Demonstrated:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.skillsDemonstrated.map((skill, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default OSProject;