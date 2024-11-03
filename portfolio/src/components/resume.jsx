import React from 'react';
import '../styles/resume.css';

const Resume = () => {
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Git', 'Responsive Design', 'REST APIs'];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        <a href="/resume.pdf" download className="resume-download">
          Download My Resume
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
