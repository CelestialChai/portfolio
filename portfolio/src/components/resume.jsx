import React from 'react';
import '../styles/resume.css';

const Resume = () => {
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Git', 'Responsive Design', 'REST APIs'];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        <a href="your-resume-url.pdf" target="_blank" rel="noopener noreferrer" className="resume-download">
          Download Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
