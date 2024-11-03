import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <img src="your-photo-url.jpg" alt="Your Name" className="about-me-photo" />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>Amanda Gipson is a talented full-stack web developer with a passion for crafting innovative and user-friendly digital solutions. With a solid foundation in HTML, JavaScript, TypeScript, and other programming languages, Amanda brings a wealth of technical expertise to every project.
            Her portfolio showcases her ability to transform complex ideas into elegant and functional websites.</p>
          <p>Amanda thrives in collaborative environments, working seamlessly with teams to deliver exceptional results.
            She is dedicated to staying up-to-date with the latest web development trends and technologies, ensuring that her work is always cutting-edge. With a keen eye for detail and a commitment to excellence, Amanda is eager to contribute her skills to exciting new projects.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
