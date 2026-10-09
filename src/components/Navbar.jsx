function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>&lt;/&gt;</span> Debaprasad
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="/Debaprasad_Gouda_Resume_05-10-2026.pdf"
        className="resume-btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;