function Skills() {

  const skills = [
    "Python",
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Django",
    "REST API",
    "MySQL",
    "MongoDB",
    "Pandas",
    "NumPy",
    "Git",
    "GitHub",
    "VS Code"
  ];

  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <p>MY SKILLS</p>
        <h2>Technologies I Work With</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">&lt;/&gt;</span>
            <h3>{skill}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;