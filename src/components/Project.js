import React from "react";
import { Code, Database, Cloud, Server, Zap } from "lucide-react";


const Project = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.summary}</p>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Server className="mr-2 text-teal-500" size={20} />
            Technical Overview:
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.technicalOverview.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Zap className="mr-2 text-teal-500" size={20} />
            Key Contributions:
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.keyContributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Code className="mr-2 text-teal-500" size={20} />
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Database className="mr-2 text-teal-500" size={20} />
            Skills Demonstrated:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.skillsDemonstrated.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <Cloud className="mr-2 text-teal-500" size={20} />
            Impact:
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
