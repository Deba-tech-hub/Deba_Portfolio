function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-heading">
        <p>CONTACT</p>
        <h2>Let's Work Together</h2>
      </div>

      <p className="contact-text">
        Have a project idea, job opportunity or just want to connect?
        Feel free to reach out.
      </p>

      <div className="contact-container">

        <a href="mailto:YOUR-EMAIL@gmail.com" className="contact-card">
          <span>✉</span>
          <div>
            <small>Email</small>
            <p>debaprasadgouda@gmail.com</p>
          </div>
        </a>

        <a href="tel:+91XXXXXXXXXX" className="contact-card">
          <span>☎</span>
          <div>
            <small>Phone</small>
            <p>+91 82808 94900</p>
          </div>
        </a>

        <div className="contact-card">
          <span>📍</span>
          <div>
            <small>Location</small>
            <p>Hyderabad, India</p>
          </div>
        </div>

      </div>

      <div className="contact-socials">

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

    </section>
  );
}

export default Contact;