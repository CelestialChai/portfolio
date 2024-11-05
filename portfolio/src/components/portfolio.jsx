import React from 'react';
import Project from './project';
import '../styles/porfotlio.css';

const projects = [
  { title: "Temperature Convertor", image: "https://i.imgur.com/RPEMtVB.jpeg", deployedLink: "https://example.com", githubLink: "https://github.com/CelestialChai/temperature_converter" },
  {title: "Vehicle Builder", image: "https://i.imgur.com/DQej75m.jpeg", deployedLink: "http://example.com", githubLink: "https://github.com/CelestialChai/Vehicle-Builder"},
  {title: "README Generator", image: "https://i.imgur.com/JU7XOpW.jpeg", deployedLink: "http://example.com", githubLink: "https://github.com/CelestialChai/README-Generator" },
  {title: "Portfolio", image: "https://i.imgur.com/lYDh3WZ.jpeg", deployedLink: "http://example.com", githubLink: "https://github.com/CelestialChai/portfolio"},
  {title: "Web Design", image: "https://i.imgur.com/UvGU3qa.jpeg", deployedLink: "http://example.com", githubLink: "https://github.com/CelestialChai"},
  {title: "Elements", image: "https://i.imgur.com/3OALSrq.jpeg", deployedLink: "http://example.com", githubLink: "https://github.com/CelestialChai"},
  // ... more projects
];

const Portfolio = () => (
  <section>
    <h2 className='project-portfolio'>Portfolio</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;