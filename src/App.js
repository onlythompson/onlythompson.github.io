import React, { useState } from 'react';
import { FileText, Code, Briefcase } from 'lucide-react';
import About from './components/About';
import Section from './components/Section';
import TechnicalSkills from './components/TechnicalSkills';
import ProfessionalExperience from './components/ProfessionalExperience';
import KeyProjects from './components/KeyProjects';
import GitHubProjects from './components/GitHubProjects';


const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { icon: Code, title: 'Technical Skills', content: <TechnicalSkills /> },
    { icon: Briefcase, title: 'Professional Experience', content: <ProfessionalExperience /> },
    { icon: FileText, title: 'Key Projects', content: <KeyProjects /> },
    // { icon: Award, title: 'Achievements & Certifications', content: <Achievements /> },
    { icon: Briefcase, title: 'GitHub Projects', content: <GitHubProjects /> },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <About />
        </div>
        <div className="lg:col-span-2 space-y-6">
          {sections.map((section, index) => (
            <Section
              key={index}
              {...section}
              isActive={activeSection === index}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;