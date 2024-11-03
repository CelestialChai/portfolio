import React from 'react';
import Project from './project';

const projects = [
  { title: "Project 1", image: "/path/to/image1.png", deployedLink: "https://example.com", githubLink: "https://github.com" },
  // ... more projects
];

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;