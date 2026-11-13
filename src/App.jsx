import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio">

     {/* Navigation Bar */}
<nav className="navbar">
  <div className="nav-container">

    <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
      Venuri<span>.</span>
    </a>

    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
    >
      {menuOpen ? '✕' : '☰'}
    </button>

    <ul className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>

      <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#personal-info" onClick={() => setMenuOpen(false)}>Personal Info</a></li>
      <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
      <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
      <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

    </ul>

    <a href="#contact" className="nav-button">
      Let's Talk <span>↗</span>
    </a>

  </div>
</nav>

      {/* Home Section */}
      <section className="home" id="home">

        <div className="home-content">

          <p className="intro-text">
            HELLO, I'M
          </p>

          <h1>
            Venuri Omasha Nethmini 
          </h1>

          <h2>
            BSc (Hons) In Information Technology 
          </h2>

          <p className="description">
            Motivated Information Technology undergraduate at SLIIT with practical experience in academic projects using Java, Spring Boot, React.js, and Node.js. Knowledgeable in full-stack web development, RESTful APIs, and database management. Eager to apply technical skills, develop problem-solving abilities, and gain hands-on experience in a professional IT environment through an internship.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/it24102440"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/venuri-nethmini-a3475439b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Profile Image Section */}
        <div className="home-image">

          <div className="image-circle">
            <img
              src="/profile.jpg"
              alt="My Profile"
              className="profile-photo"
            />
          </div>

          <div className="floating-card">
            <span>💻</span>
            <p>IT Undergraduate</p>
          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="about" id="about">

        <h2>About Me</h2>

        <p className="section-subtitle">
          Get to know me
        </p>

        <div className="about-content">

          <p>

A motivated IT undergraduate passionate about web development and building practical software solutions.
</p>

<p>
Hi, I'm Venuri Omasha Nethmini, an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). I have a strong interest in developing modern web applications and exploring new technologies. I enjoy learning new concepts, solving problems, and transforming ideas into practical applications.
</p>

<p>
My technical skills include <b>Java, Spring Boot, React.js, JavaScript, HTML, CSS, Node.js, MySQL, MongoDB, </b>and <b>Git</b>. I have gained practical experience through academic projects involving web development, RESTful APIs, database management, and application development. 
</p>

<p>
I am continuously working to improve my technical knowledge and problem-solving skills. I am currently seeking an opportunity to gain hands-on experience, collaborate with professionals, and grow my career in the IT industry.
          </p>

        </div>

      </section>

{/* Personal Information Section */}

<section className="personal-info" id="personal-info">

  <h2>Personal Information</h2>
  <p className="section-subtitle">
    Get to know more about me
  </p>

  <div className="personal-info-container">

    <div className="personal-info-card">

      <div className="info-item">
        <span className="info-icon">👤</span>
        <div>
          <h4>Name</h4>
          <p>G.D. Venuri Omasha Nethmini</p>
        </div>
      </div>

      <div className="info-item">
        <span className="info-icon">📞</span>
        <div>
          <h4>Phone</h4>
          <a href="tel:+94762374938">+94 76 237 4938</a>
        </div>
      </div>

      <div className="info-item">
        <span className="info-icon">📧</span>
        <div>
          <h4>Email</h4>
          <a href="mailto:venuriomashanethmini0204@gmail.com">
            venuriomashanethmini0204@gmail.com
          </a>
        </div>
      </div>

      <div className="info-item">
        <span className="info-icon">💼</span>
        <div>
          <h4>Role</h4>
          <p>IT Undergraduate | Aspiring Full Stack Developer</p>
        </div>
      </div>

      <div className="info-item">
        <span className="info-icon">🌐</span>
        <div>
          <h4>Status</h4>
          <p className="open-status">Open to IT Internship Opportunities</p>
        </div>
      </div>

      <div className="info-item">
        <span className="info-icon">🎓</span>
        <div>
          <h4>University</h4>
          <p>SLIIT</p>
        </div>
      </div>

    </div>

  </div>

</section>


{/* Education Section */}
<section className="education" id="education">

  <h2>My Background</h2>

  <p className="section-subtitle">
    My academic journey and qualifications
  </p>

  <div className="education-container">

    <div className="education-card">
      <span className="education-status">Current</span>
      <span className="education-year">2024 – Present</span>

      <h3>BSc (Hons) in Information Technology</h3>

      <h4>🎓 SLIIT – Sri Lanka Institute of Information Technology</h4>

      <p>
        Currently pursuing an undergraduate degree in Information
        Technology, developing knowledge and practical skills in
        software development, web technologies, database management,
        application development, and IT infrastructure. Gaining
        hands-on experience through academic projects and practical learning.
      </p>

      <div className="education-tags">
        <span>Information Technology</span>
        <span>Full Stack Development</span>
      </div>
    </div>

    {/* A/L Education Card */}

<div className="education-card">
  <span className="education-status completed">Completed</span>

  <div className="education-year">2023</div>

  <h3>G.C.E. Advanced Level (A/L)</h3>
  <h4>R/Eheliyagoda Central College</h4>
  <h4>Commerce Stream</h4>

  <p>
    Successfully completed the G.C.E. Advanced Level examination
    in the Commerce stream.
  </p>

  <div className="education-tags">
    <span>Accounting - S</span>
    <span>Economics - C</span>
    <span>ICT - S</span>
  </div>
</div>

{/* O/L Education Card */}
<div className="education-card">
  <span className="education-status completed">Completed</span>

  <div className="education-year">2020</div>

  <h3>G.C.E. Ordinary Level (O/L)</h3>
  <h4>R/Eheliyagoda Central College</h4>

  <p>
    Successfully completed the G.C.E. Ordinary Level examination
    with 4 A passes, 3 B passes, and 2 C passes.
  </p>

  <div className="education-tags">
    <span>4 A Passes</span>
    <span>3 B Passes</span>
    <span>2 C Passes</span>
  </div>
</div>

{/* English Diploma Card */}
<div className="education-card">
  <span className="education-status completed">Completed</span>

  <div className="education-year">2025</div>

  <h3>Diploma in English</h3>
  <h4>SITC Campus</h4>

  <p>
    Successfully completed the Diploma in English,
    developing English language and communication skills.
  </p>


  <a
    href="/english-diploma-certificate.jpg"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View Certificate →
  </a>
</div>
</div>
</section>


            {/* Skills Section */}
<section className="skills" id="skills">

  <h2>Technical Skills</h2>

  <p className="section-subtitle">
    Technologies and tools I have worked with
  </p>

  <div className="skills-container">

    {/* Frontend */}
    <div className="skill-category">
      <h3>Frontend Development</h3>

      <div className="skills-list">
        <div className="skill-item">
          <i className="devicon-html5-plain colored"></i>
          <span>HTML</span>
        </div>

        <div className="skill-item">
          <i className="devicon-css3-plain colored"></i>
          <span>CSS</span>
        </div>

        <div className="skill-item">
          <i className="devicon-javascript-plain colored"></i>
          <span>JavaScript</span>
        </div>

        <div className="skill-item">
          <i className="devicon-react-original colored"></i>
          <span>React.js</span>
        </div>
      </div>
    </div>

    {/* Backend */}
    <div className="skill-category">
      <h3>Backend Development</h3>

      <div className="skills-list">
        <div className="skill-item">
          <i className="devicon-java-plain colored"></i>
          <span>Java</span>
        </div>

        <div className="skill-item">
          <i className="devicon-spring-original colored"></i>
          <span>Spring Boot</span>
        </div>

        <div className="skill-item">
          <i className="devicon-nodejs-plain colored"></i>
          <span>Node.js</span>
        </div>

        <div className="skill-item">
          <i className="devicon-express-original"></i>
          <span>Express.js</span>
        </div>
      </div>
    </div>

    {/* Databases */}
    <div className="skill-category">
      <h3>Databases</h3>

      <div className="skills-list">
        <div className="skill-item">
          <i className="devicon-mysql-original colored"></i>
          <span>MySQL</span>
        </div>

        <div className="skill-item">
          <i className="devicon-mongodb-plain colored"></i>
          <span>MongoDB</span>
        </div>

        <div className="skill-item">
          <i className="devicon-microsoftsqlserver-plain colored"></i>
          <span>SQL Server</span>
        </div>
      </div>
    </div>

    {/* Tools */}
    <div className="skill-category">
      <h3>Tools & Technologies</h3>

      <div className="skills-list">
        <div className="skill-item">
          <i className="devicon-git-plain colored"></i>
          <span>Git</span>
        </div>

        <div className="skill-item">
          <i className="devicon-github-original"></i>
          <span>GitHub</span>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.simpleicons.org/postman/FF6C37"
            alt="Postman"
          />
          <span>Postman</span>
        </div>

        <div className="skill-item">
          <i className="devicon-vscode-plain colored"></i>
          <span>VS Code</span>
        </div>
      </div>
    </div>

  </div>
</section>
      
     {/* Projects Section */}
<section className="projects" id="projects">

  <h2>My Projects</h2>

  <p className="project-subtitle">
    Some of the academic projects I have worked on.
  </p>

  <div className="project-list">

    <div className="project-card">
      <h3>RideLink</h3>
      <p>
        A ride-sharing backend microservice focused on
        driver and vehicle management.
      </p>
      <div className="project-tech">
        Java | Spring Boot | MongoDB | REST API
      </div>
      <a
        href="https://github.com/it24102440/RideLink-Driver-Vehicle-Service-"
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>

    <div className="project-card">
      <h3>Computer Shop Management System</h3>
      <p>
        A web application for managing computer products,
        shopping carts, and customer orders.
      </p>
      <div className="project-tech">
        React | Node.js | Express.js | Database
      </div>
      <a
        href="https://github.com/it24102440/Computer-Shop-Management-System-"
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>

    <div className="project-card">
      <h3>Smart Marine Mobile Application</h3>
      <p>
        A mobile application designed to support the marine
        supply chain by managing fishing trips, catches,
        inventory, orders, and market information.
      </p>
      <div className="project-tech">
        React Native | Expo | Node.js | Express.js | MongoDB | Supabase
      </div>
      <a
        href="https://github.com/it24102440/Smart-Marine-Mobile-Application-"
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>


  </div>

</section>

     {/* Contact Section */}
<section className="contact" id="contact">

  <h2>Contact Me</h2>

  <p className="section-subtitle">
    Have a question or want to work together? Feel free to send me a message.
  </p>

  <div className="contact-container">

    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        const mailtoLink = `mailto:venuriomashanethmini0204@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        window.location.href = mailtoLink;
      }}
    >

      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter subject"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Write your message..."
          required
        ></textarea>
      </div>

      <button type="submit" className="send-button">
        Send Message <span>➤</span>
      </button>

    </form>

  </div>

</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Venuri_Omasha. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App