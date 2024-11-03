import React from 'react';
import '../styles/project.css';


const Project = ({ title, image, deployedLink, githubLink }) => (
  <div className="project">
    <img src={image} alt={`${title} screenshot`} />
    <h3>{title}</h3>
    <div className="project-links">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  </div>
);

export default Project;