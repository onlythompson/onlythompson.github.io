import React from "react";
import Project from "./Project";

// KeyProjects Component
const KeyProjects = () => {
  const projects = [
    {
      title: "Nigerpet Business Information System (NPSBIS)",
      summary:
        "Transformed legacy systems into a modern, scalable architecture to enhance operational efficiency and data flow across 6 core business departments.",
      technicalOverview: [
        "Event-driven microservices architecture on Azure, guided by domain-driven design principles",
        "Centralized API management platform using Flask and Django",
        "Cloud-native API Gateway for request handling and routing",
        "React-based SPA with SSR capabilities",
        "Vue.js with Nuxt.js for improved SEO and performance",
        "Redux and Vuex for state management",
        "Microservices implemented in Python, Node.js, and ASP.NET",
        "Polyglot persistence: PostgreSQL, MongoDB, MSSQL",
        "Kafka for event streaming between services",
        "CI/CD pipeline with Azure DevOps and Terraform",
      ],
      keyContributions: [
        "Engineered a centralized API management platform, streamlining data flow across all functional units",
        "Developed responsive front-ends using React.js and Vue.js, enhancing user experience and system accessibility",
        "Implemented fault-tolerant system handling 10,000+ concurrent users",
        "Designed real-time data synchronization using Apache Kafka",
        "Integrated advanced caching with Redis, reducing database load by 70%",
        "Leveraged ELK stack for comprehensive system monitoring and logging",
        "Established comprehensive test automation with 95% code coverage, adhering to TDD and BDD principles",
      ],
      technologies: [
        "React",
        "Vue.js",
        "Nuxt.js",
        "Redux",
        "Vuex",
        "Python (Flask, Django)",
        "Node.js",
        "ASP.NET",
        "PostgreSQL",
        "MongoDB",
        "MSSQL",
        "Redis",
        "Kafka",
        "Azure (API Management, AKS, Functions, App Service)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "ELK Stack",
      ],
      skillsDemonstrated: [
        "Microservices Architecture",
        "Domain-Driven Design",
        "API Management and Design",
        "Full-Stack Development",
        "Cloud Deployment (Azure)",
        "DevOps practices",
        "Distributed Systems",
        "Clean Code principles",
        "Test-Driven Development (TDD)",
        "Behavior-Driven Development (BDD)",
      ],
      impact: [
        "65% increase in business process efficiency",
        "99.9% reduction in system downtime",
        "70% decrease in time-to-market for new features",
        "25% increase in customer satisfaction scores",
        "Scalable architecture significantly reducing technical debt",
      ],
    },

    {
      title: "FUTIA School Management System",
      summary:
        "Developed a comprehensive, scalable School Management System for FUTIA (Federal University of Technology, Akure) to revolutionize administrative processes and academic information management, demonstrating adaptability to complex institutional requirements.",
      technicalOverview: [
        "Multi-tier architecture using .NET Framework and microservices",
        "Microsoft SQL Server with optimized schema design for educational data",
        "RESTful APIs (ASP.NET Web API) with OAuth 2.0 authentication",
        "Responsive frontend: React-based SPA with server-side rendering capabilities",
        "Vue.js with Nuxt.js for improved SEO and performance",
        "State management using Redux and Vuex",
        "Microservices implemented in Python (Flask/Django), Node.js, and ASP.NET",
        "Polyglot persistence: SQL Server, PostgreSQL, MongoDB",
        "Azure cloud services for scalability and reliability",
      ],
      keyContributions: [
        "Architected a flexible, module-based system allowing for easy addition of new features",
        "Implemented an advanced reporting engine using SQL Server Reporting Services (SSRS)",
        "Developed a robust student portal for course registration, grade viewing, and academic progress tracking",
        "Created a faculty module for managing courses, submitting grades, and tracking student performance",
        "Implemented a sophisticated permissions system using role-based access control (RBAC)",
        "Designed and implemented RESTful APIs for seamless data exchange between system components",
        "Ensured cross-browser and cross-device compatibility for all user interfaces",
      ],
      technologies: [
        ".NET Framework",
        "C#",
        "ASP.NET MVC",
        "ASP.NET Web API",
        "React",
        "Vue.js",
        "Nuxt.js",
        "Redux",
        "Vuex",
        "Python (Flask, Django)",
        "Node.js",
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Azure services (App Service, SQL Database, Active Directory B2C)",
      ],
      skillsDemonstrated: [
        "Distributed Systems Architecture",
        "Full-Stack Web Development",
        "Database Design and Optimization",
        "Cloud-Native Application Development",
        "API Design and Development",
        "Microservices Architecture",
        "Security and Compliance in Educational Software",
        "Agile Project Management",
        "Test-Driven Development (TDD)",
      ],
      impact: [
        "Streamlined 95% of administrative processes, reducing manual data entry by 80%",
        "Increased student satisfaction rates by 40% through intuitive self-service portals",
        "Improved data accuracy and reduced grading errors by 99%",
        "Enabled real-time decision-making for university administrators with custom dashboards",
        "Decreased IT support tickets by 60% due to user-friendly interfaces",
        "Established a scalable platform capable of supporting a 200% increase in student enrollment",
      ],
    },
    {
      "title": "NDDC Socio-Economic Impact Assessment System",
      "summary": "Developed a data-driven system for the Niger Delta Development Commission (NDDC) to assess socio-economic impacts of regional projects, enabling evidence-based decision making and optimizing resource allocation in the Niger Delta region.",
      "technicalOverview": [
        "Built on .NET Framework for robust, enterprise-grade performance",
        "Data-driven architecture to handle complex socio-economic datasets specific to the Niger Delta",
        "Scalable backend to process and analyze large volumes of NDDC project data",
        "User-friendly frontend for intuitive data input and visualization",
        "Secure authentication and role-based access control for NDDC staff and stakeholders",
        "Integrated reporting module for generating comprehensive impact assessments of NDDC initiatives"
      ],
      "keyContributions": [
        "Architected and implemented the core assessment engine using .NET Framework",
        "Designed data models to effectively capture and analyze socio-economic indicators relevant to the Niger Delta region",
        "Developed algorithms for quantifying project impacts across various sectors crucial to NDDC's mission",
        "Created an intuitive user interface for data input and result visualization tailored to NDDC requirements",
        "Implemented a flexible reporting system for customizable impact reports on NDDC projects",
        "Ensured system scalability to handle multiple regional development projects simultaneously"
      ],
      "technologies": [
        ".NET Framework",
        "C#",
        "ASP.NET",
        "SQL Server",
        "Entity Framework",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Chart.js"
      ],
      "skillsDemonstrated": [
        "Project Management in a government context",
        "Full-Stack Development",
        "Data Modeling and Analysis for regional development",
        "Algorithm Design for socio-economic impact assessment",
        "UI/UX Design for government systems",
        "Reporting and Data Visualization of development metrics",
        "Scalable System Architecture for large-scale regional projects"
      ],
      "impact": [
        "Improved NDDC's resource allocation efficiency by 25%",
        "Enabled evidence-based decision making for NDDC project stakeholders",
        "Streamlined the process of socio-economic impact assessment in the Niger Delta region",
        "Increased transparency and accountability in NDDC project evaluation",
        "Enhanced NDDC's ability to predict and mitigate negative project impacts on local communities"
      ]
    }
  ];

  return (
    <div>
      <div className="flex items-center mb-6"></div>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default KeyProjects;
