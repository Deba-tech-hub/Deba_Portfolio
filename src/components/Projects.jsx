function Projects() {

  const projects = [
    {
      title: "Student Management System",
      image: "/student-app.png",
      description:
        "A React-based student management system with dashboard, student records and CRUD functionality.",
      technologies: ["React", "JavaScript", "Bootstrap"],
      demo: "https://student-management-system-nblf.vercel.app/",
      github: "https://github.com/debaprasad-dev/student-management-system"
    },

    {
      title: "Weather App",
      image: "/weather-app.png",
      description:
        "A weather application that displays current weather, forecasts and other weather information using an API.",
      technologies: ["React", "Axios", "OpenWeather API"],
      demo: "https://react-weather-app-eta-topaz.vercel.app/",
      github: "https://github.com/debaprasad-dev/react-weather-app"
    }

    
  ];

  return (
    <section id="projects" className="section projects">

      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;