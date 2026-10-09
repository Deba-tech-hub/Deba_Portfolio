function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hello">Hello, I'm</p>

        <h1>
          Debaprasad <span>Gouda</span>
        </h1>

        <h2>Python Developer | Full Stack Developer</h2>

        <p className="hero-description">
          MCA Graduate with a strong foundation in Python, web development
          and database technologies. I enjoy building useful applications
          and solving real-world problems through code.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="/Debaprasad_Gouda_Resume_05-10-2026.pdf" 
          className="secondary-btn" 
          target="_blank"
          rel="noreferrer"
          download="Debaprasad_Gouda_Resume_05-10-2026.pdf">
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Deba-tech-hub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="http://www.linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-circle"></div>

        <img src="/profile_pic.jpeg" alt="Debaprasad Gouda" />
      </div>
    </section>
  );
}

export default Hero;