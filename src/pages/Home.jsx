export const Home = () => {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">Portfolio</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-avatar">
            <img src="/my-img.jpg" alt="Bishnu Avatar" className="avatar-img" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Bishnu Saha</h1>
            <p className="hero-subtitle">
              Full Stack Developer | MCA Graduate | Tech Enthusiast
            </p>
            <p className="hero-description">
              Crafting efficient, user-centric web solutions that turn ideas
              into impactful digital experiences
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <strong>Bishnu Saha</strong> — a passionate web developer
                with a{" "}
                <strong>Master's degree in Computer Applications (MCA)</strong>{" "}
                and a strong foundation in advanced computer science. I thrive
                on creating efficient, user-friendly, and visually appealing web
                applications that make a real impact.
              </p>
              <p>
                My expertise spans both{" "}
                <strong>frontend and full-stack development</strong>, with
                proficiency in{" "}
                <strong>
                  React, Next.js, Vue.js, Node.js/Express, Git, and GitHub
                </strong>
                . I believe in building scalable, clean, and maintainable code
                that drives meaningful solutions.
              </p>
              <p>
                Currently, I'm working as a{" "}
                <strong>Technical Trainee at Authnull</strong>, where I'm
                gaining hands-on experience in modern development workflows and
                tackling real-world software challenges. Through various
                projects and my academic background, I've strengthened my
                problem-solving skills and deepened my understanding of how
                systems work at scale.
              </p>
              <p>
                I'm always eager to learn new tools, take on exciting
                challenges, and collaborate on projects that bring ideas to life
                through clean code and creative design. Whether it's a startup
                idea or an enterprise solution, I'm ready to contribute my
                technical skills and creative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-emoji">🧠</div>
              <div className="project-header">
                <h3>Smart Scholars 360</h3>
                <p className="project-link-site">
                  <a
                    href="https://smartscholars360.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    smartscholars360.com
                  </a>
                </p>
              </div>
              <p className="project-description">
                An educational platform that helps students explore and enroll
                in affordable online courses. Designed and built a responsive
                interface to improve accessibility.
              </p>
              <ul className="project-highlights">
                <li>
                  Responsive interface improving accessibility across devices
                </li>
                <li>
                  Enhanced user experience and reduced page load time by 20%
                </li>
                <li>Comprehensive course discovery and enrollment system</li>
              </ul>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Express</span>
                <span className="tag">Bootstrap 5</span>
                <span className="tag">GSAP</span>
                <span className="tag">Canvas</span>
              </div>
            </div>

            <div className="project-card featured">
              <div className="project-emoji">🩸</div>
              <div className="project-header">
                <h3>Blood Management System</h3>
              </div>
              <p className="project-description">
                A full-stack project simplifying the blood donation process
                through role-based authentication for admins, organizations, and
                users.
              </p>
              <ul className="project-highlights">
                <li>
                  Users can request blood, view donation camps, and manage
                  profiles
                </li>
                <li>
                  Admin dashboard for overseeing requests and camp activations
                </li>
                <li>Role-based access control for three user types</li>
              </ul>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PHP</span>
                <span className="tag">MySQL</span>
              </div>
            </div>

            <div className="project-card featured">
              <div className="project-emoji">🛒</div>
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
                <p className="project-link-site">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
              <p className="project-description">
                An end-to-end online store built using Nuxt 3, showcasing modern
                front-end architecture and state management patterns with
                TypeScript support.
              </p>
              <ul className="project-highlights">
                <li>
                  Full-featured e-commerce UI with Nuxt 3 SSR/SSG capabilities
                </li>
                <li>State management for cart, products, and user sessions</li>
                <li>
                  TypeScript for improved code quality and maintainability
                </li>
                <li>Modular component architecture following DRY principles</li>
                <li>
                  Production-ready with optimized assets and middleware
                  protection
                </li>
              </ul>
              <div className="project-tags">
                <span className="tag">Vue.js</span>
                <span className="tag">Nuxt 3</span>
                <span className="tag">TypeScript</span>
                <span className="tag">State Management</span>
                <span className="tag">SCSS</span>
              </div>
            </div>

            <div className="project-card featured">
              <div className="project-emoji">⚙️</div>
              <div className="project-header">
                <h3>Work-Manager</h3>
                <p className="project-link-site">
                  <a
                    href="https://github.com/Bishnu59273/work-manager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
              <p className="project-description">
                An end-to-end task management tool featuring user/workflow
                management, role-based access control, and an interactive UI
                with comprehensive CRUD operations and persistent data storage.
              </p>
              <ul className="project-highlights">
                <li>
                  Modular architecture with separated frontend, backend, and
                  data layers
                </li>
                <li>
                  Task management: create, assign, track, and update with
                  statuses (pending, in-progress, completed)
                </li>
                <li>
                  Role-based access control (admin vs normal users) with
                  authorization checks
                </li>
                <li>
                  Interactive UI with dynamic task lists, filters (status,
                  assignee, due date), and inline editing
                </li>
                <li>
                  Robust backend API with CRUD operations, error handling, and
                  data validation
                </li>
                <li>
                  Persistent database with data integrity and optimized queries
                </li>
                <li>
                  Code quality focus: linting, organized folder structure
                  (controllers, models, routes)
                </li>
              </ul>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">Technical Trainee</h3>
                <p className="experience-company">Authnull</p>
              </div>
              <p className="experience-period">
                <span className="experience-icon">📅</span> Current
              </p>
              <p className="experience-description">
                Gaining hands-on experience in modern development workflows and
                tackling real-world software challenges. Working with
                cutting-edge technologies to build scalable solutions and
                contributing to the development of authentication systems.
              </p>
              <ul className="experience-highlights">
                <li>
                  Developing full-stack features for production applications
                </li>
                <li>
                  Collaborating with experienced developers on code reviews
                </li>
                <li>
                  Implementing best practices in clean code and system design
                </li>
                <li>Contributing to documentation and team knowledge base</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">
                  Master of Computer Applications
                </h3>
                <p className="experience-company">MCA - Completed</p>
              </div>
              <p className="experience-period">
                <span className="experience-icon">🎓</span> Completed
              </p>
              <p className="experience-description">
                Successfully completed Master of Computer Applications degree
                with strong foundation in advanced computer science concepts.
                Built practical projects while balancing academic rigor with
                real-world development experience. Strengthened problem-solving
                abilities through comprehensive coursework.
              </p>
              <ul className="experience-highlights">
                <li>
                  Mastered advanced computer science and software engineering
                  concepts
                </li>
                <li>
                  Developed multiple projects bridging theory and industry
                  practice
                </li>
                <li>Enhanced problem-solving and analytical thinking skills</li>
                <li>
                  Applied academic knowledge to real-world development
                  challenges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skill-list">
                <li>React</li>
                <li>Next.js</li>
                <li>Vue.js</li>
                <li>JavaScript / HTML5 / CSS3</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Database Management</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools & Version Control</h3>
              <ul className="skill-list">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Expertise</h3>
              <ul className="skill-list">
                <li>Problem Solving</li>
                <li>Scalable Architecture</li>
                <li>Clean Code Practices</li>
                <li>Collaborative Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'd love to hear from you! Feel free to reach out for collaborations
            or just a friendly hello.
          </p>

          {/* Contact Information Card */}
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-content">
                <h4>Location</h4>
                <p>
                  Tarak Das Road, Kaliyaganj
                  <br />
                  West Bengal, India - 733129
                </p>
              </div>
            </div>

            <div className="contact-info-divider"></div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📱</div>
              <div className="contact-info-content">
                <h4>Mobile</h4>
                <p>
                  <a href="tel:6294525876">6294525876</a> (Call)
                  <br />
                  <a
                    href="https://wa.me/919046574113"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    9046574113
                  </a>{" "}
                  (WhatsApp)
                </p>
              </div>
            </div>

            <div className="contact-info-divider"></div>

            <div className="contact-info-item">
              <div className="contact-info-icon">✉️</div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>
                  <a href="mailto:bishnusaha59273@gmail.com">
                    bishnusaha59273@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:bishnusaha59273@gmail.com" className="contact-link">
              <span className="link-icon">📧</span> Email
            </a>
            <a
              href="www.linkedin.com/in/bishnu-saha-8b33a123b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="link-icon">💼</span> LinkedIn
            </a>
            <a
              href="https://github.com/bishnu59273"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="link-icon">🐙</span> GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="link-icon">𝕏</span> Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Bishnu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
