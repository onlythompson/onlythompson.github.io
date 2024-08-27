import React from 'react';
import OSProject from './OSProject';

const OpenSourceProjects = () => {
    const projects = [
      {
        "title": "FastAPI LLM-Powered Microservice Template",
        "overview": "Developed a cutting-edge microservice template leveraging Large Language Models (LLMs) and FastAPI to facilitate rapid deployment of AI-driven APIs. This project showcases the integration of advanced AI capabilities with modern web development practices.",
        "keyFeatures": [
          "Implemented a flexible architecture supporting multiple LLM providers (OpenAI, Anthropic, etc.)",
          "Designed an efficient prompt management system for versioning and reuse",
          "Integrated asynchronous processing for high-performance LLM requests",
          "Developed a caching layer to optimize performance and reduce API costs",
          "Implemented comprehensive error handling and logging systems",
          "Set up distributed tracing using OpenTelemetry and Jaeger"
        ],
        "technicalStack": [
          "Python",
          "FastAPI",
          "OpenAI GPT",
          "Anthropic Claude",
          "Redis",
          "Docker",
          "Kubernetes",
          "OpenTelemetry",
          "Jaeger"
        ],
        "challengesAndSolutions": [
          "Challenge: Integrating multiple LLM providers with varying APIs. Solution: Developed a flexible adapter pattern to standardize interactions with different LLM services",
          "Challenge: Managing high volumes of LLM requests efficiently. Solution: Implemented asynchronous processing and a Redis-based caching system to optimize performance",
          "Challenge: Ensuring scalability and ease of deployment. Solution: Containerized the application with Docker and provided Kubernetes configurations for cloud deployment"
        ],
        "impactAndResults": [
          "Reduced development time for LLM-powered applications by 40%",
          "Improved response times by 30% through efficient caching and asynchronous processing",
          "Enabled seamless scaling to handle varying loads in production environments"
        ],
        "skillsDemonstrated": [
          "Advanced Python programming",
          "API development with FastAPI",
          "AI/ML integration (specifically LLMs)",
          "Microservices architecture",
          "Containerization and orchestration",
          "Performance optimization",
          "Distributed systems design"
        ]
      },
      {
        "title": "FastAPI Microservice Template",
        "overview": "Developed a comprehensive microservice template using FastAPI, incorporating Clean Architecture principles and Domain-Driven Design (DDD). This project provides a robust foundation for building scalable, maintainable, and efficient microservices, showcasing best practices in modern software architecture and development.",
        "keyFeatures": [
          "Implemented Clean Architecture and Domain-Driven Design principles",
          "Integrated FastAPI for high-performance API development",
          "Set up PostgreSQL database integration with SQLAlchemy ORM",
          "Incorporated Redis for caching and distributed locking",
          "Implemented Kafka for asynchronous messaging",
          "Designed a comprehensive testing setup (unit, integration, end-to-end)",
          "Provided Kubernetes deployment configuration",
          "Set up CI/CD pipeline (GitHub Actions and Jenkins)",
          "Implemented API documentation with Swagger/OpenAPI",
          "Established logging and monitoring setup",
          "Integrated security best practices",
          "Optimized for scalability and performance"
        ],
        "technicalStack": [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "SQLAlchemy ORM",
          "Redis",
          "Kafka",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Jenkins",
          "Pytest",
          "Locust",
          "Swagger/OpenAPI"
        ],
        "challengesAndSolutions": [
          "Challenge: Implementing a clean, modular architecture. Solution: Structured the project following Clean Architecture and DDD principles, separating concerns into distinct layers",
          "Challenge: Ensuring scalability and performance. Solution: Integrated Redis for caching and Kafka for asynchronous messaging, optimizing data flow and system responsiveness",
          "Challenge: Streamlining deployment and scaling. Solution: Provided Kubernetes configurations and CI/CD pipeline setups for efficient deployment and scaling",
          "Challenge: Maintaining code quality and consistency. Solution: Implemented comprehensive testing strategies and CI/CD pipelines to ensure code quality"
        ],
        "impactAndResults": [
          "Reduced microservice development time by up to 50% by providing a robust, ready-to-use template",
          "Improved code maintainability and scalability, leading to easier long-term management of microservices",
          "Enhanced system performance through optimized architecture and caching strategies",
          "Streamlined deployment processes, reducing deployment times and increasing reliability"
        ],
        "skillsDemonstrated": [
          "Advanced Python and FastAPI development",
          "Application of Clean Architecture and Domain-Driven Design principles",
          "Database design and ORM usage",
          "Asynchronous programming and messaging systems",
          "Containerization and orchestration with Docker and Kubernetes",
          "CI/CD pipeline setup and management",
          "API design and documentation",
          "Performance optimization and testing",
          "Security best practices in microservices",
          "Technical documentation (including Architecture Decision Records)"
        ]
      },
      {
        title: "Django REST Framework DDD Project Template",
        overview: "Engineered a comprehensive project template for Django REST Framework applications, incorporating Domain-Driven Design (DDD) principles and Clean Architecture.",
        keyFeatures: [
          "Implemented a layered architecture following DDD and Clean Architecture principles",
          "Designed a modular structure to separate concerns and improve code organization",
          "Integrated Django REST Framework for robust API development",
          "Developed a suite of pre-configured tools for code quality and consistency",
          "Created a custom script for automating project structure setup"
        ],
        technicalStack: [
          "Python", "Django", "Django REST Framework", "PostgreSQL", "Black", "isort", "Flake8", "MyPy", "Pytest", "Git", "Poetry"
        ],
        challengesAndSolutions: [
          "Challenge: Applying DDD principles to a Django project. Solution: Carefully structured the project to separate domain logic from framework code, utilizing Django apps to represent bounded contexts",
          "Challenge: Ensuring code quality and consistency across large projects. Solution: Implemented a comprehensive set of pre-commit hooks and linting tools, along with clear development guidelines",
          "Challenge: Simplifying the initial project setup process. Solution: Developed a custom Python script to automate the creation of the project structure, saving time and reducing setup errors"
        ],
        impactAndResults: [
          "Reduced initial project setup time by 60%",
          "Improved code maintainability and readability, leading to a 30% decrease in bug reports",
          "Increased developer productivity by providing a clear, well-organized project structure"
        ],
        skillsDemonstrated: [
          "Advanced Django and Django REST Framework development",
          "Application of Domain-Driven Design principles",
          "Clean Architecture implementation",
          "API design and development",
          "Automated tooling and scripting",
          "Best practices in Python development",
          "Software architecture and design patterns"
        ]
      },
    ];
  
    return (
      <div>
        {projects.map((project, index) => (
          <OSProject key={index} project={project} />
        ))}
      </div>
    );
  };

  export default OpenSourceProjects;