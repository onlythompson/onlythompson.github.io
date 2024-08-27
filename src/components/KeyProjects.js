import React from "react";

// KeyProjects Component
const KeyProjects = () => (
  <ul className="text-gray-700 space-y-4">
    <li>
      <strong>Nigerpet Business Information System (NPSBIS):</strong>
      <p>
        Led the transformation of legacy systems using domain-driven design,
        CQRS, and microservices on Azure. Resulted in 30% faster data processing
        and 45% reduction in system downtime.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          Spearheaded the transformation of legacy systems using domain-driven
          design and microservices architecture on Azure.
        </li>
        <li>
          Engineered a centralized API management platform using .NET, Flask and
          Django, streamlining data flow across all functional units.
        </li>
        <li>
          Implemented a responsive front-end using React.js, significantly
          improving user experience and system accessibility.{" "}
        </li>
        <li>
          Led the migration of legacy applications to modern frontend frameworks
          (React, Angular), improving maintainability and enabling faster
          feature development.
        </li>
        <li>
          Mentored junior developers in front-end best practices, conducting
          regular code reviews and pair programming sessions to elevate team
          skills.
        </li>
      </ul>
    </li>
    <li>
      <strong>Engineering Bill Management System:</strong>
      <p>
        Architected a distributed Windows application using .NET Framework and
        SQL Server, optimizing bill generation processes and reducing processing
        time by 60%.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          Designed and implemented a distributed application using .NET
          Framework and Microsoft SQL Server.
        </li>
        <li>
          {" "}
          Developed a responsive web interface using HTML5, CSS3, and
          JavaScript, ensuring seamless user interaction across devices.
        </li>
        <li>
          Implemented RESTful APIs to facilitate data exchange between front-end
          and back-end components.
        </li>
      </ul>
    </li>
    <li>
      <strong>NDDC Infrastructure Assessment System:</strong>
      <p>
        Developed a data-driven system for assessing socio-economic impacts of
        projects, enabling evidence-based decision making and improving resource
        allocation by 25%.
      </p>
    </li>
  </ul>
);

export default KeyProjects;
