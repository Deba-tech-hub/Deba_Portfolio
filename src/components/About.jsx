function About() {
  return (
    <section id="about" className="section about">

      <div className="section-heading">
        <p>ABOUT ME</p>
       
      </div>

      <div className="about-container">

        <div className="about-text">
          <h3>I'm a Developer who loves building things.</h3>

          <p>
            I am an MCA Graduate with an interest in Python development
            and full-stack web development. I have worked with Python,
            React, Django, JavaScript, MySQL and other web technologies.
          </p>

          <p>
            I enjoy creating projects that combine a clean user interface
            with useful backend functionality. Currently, I am focusing
            on improving my Django, REST API and full-stack development
            skills.
          </p>

          <a href="#contact" className="primary-btn">
            Let's Connect
          </a>
        </div>

        <div className="about-info">

          <div className="info-card">
            <h3>MCA</h3>
            <p>Graduate - 2026</p>
          </div>

          <div className="info-card">
            <h3>Python</h3>
            <p>Primary Development</p>
          </div>

          <div className="info-card">
            <h3>Full Stack</h3>
            <p>Development Goal</p>
          </div>

          <div className="info-card">
            <h3>Projects</h3>
            <p>Web Applications</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;