import React from 'react';
import { Github, Linkedin, Mail} from 'lucide-react';
import pics from '../profile-pics.png';


const About = () => (
  <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg p-6 sticky top-8">
    <div className="flex justify-center mb-6">
      <img 
        src={pics} 
        alt="Dominic Thompson" 
        className="rounded-full w-32 h-32 object-cover border-4 border-blue-500"
      />
    </div>
    <h1 className="heading text-4xl mb-4 text-center">Dominic Thompson</h1>
    <h2 className="subheading text-2xl mb-6 text-center">Full-Stack Software Engineer</h2>
    <p className="text-gray-700 mb-6">
    Experienced Full Stack Engineer, System Architect & Cloud Solutions Expert. I excel at mastering complex tech ecosystems and synergizing innovation with business strategy.
    </p>
    <p className="text-gray-700 mb-6">
      Proficient in both frontend and backend technologies, I excel at creating robust, user-centric applications that solve complex business problems. My expertise spans the entire software development lifecycle, from conceptualization to deployment and maintenance.
    </p>
    <p className="text-gray-700">
      I'm passionate about leveraging cutting-edge technologies like AI/ML and cloud computing to create innovative solutions that drive business growth and efficiency.
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <a href="https://github.com/onlythompson" className="text-gray-600 hover:text-gray-800">
        <Github size={28} />
      </a>
      <a href="https://linkedin.com/in/thompsondominic" className="text-gray-600 hover:text-gray-800">
        <Linkedin size={28}/>
      </a>
      <a href="mailto:onlythompson@gmail.com" className="text-gray-600 hover:text-gray-800">
        <Mail size={28}/>
      </a>
    </div>
  </div>
);

export default About;