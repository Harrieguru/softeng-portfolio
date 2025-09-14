import React, { useState, useEffect } from "react";
import pic from "../assets/pic.jpg";
import docker from "../assets/docker.png";
import dotnet from "../assets/dotnet.png";
import git from "../assets/git.png";
import node from "../assets/node.png";
import postgresql from "../assets/postgresql.jpg";
import python from "../assets/python.png";
import React_Logo from "../assets/React_Logo.png";
import springboot from "../assets/spring-boot.png";
import Tailwind_Logo from "../assets/Tailwind_Logo.png";
import Typescript from "../assets/Typescript.png";
import Portfolio from "../assets/portfolio.png";
import "../styles/component.css";

//define interface for type safety
interface skill {
  name: string;
  img: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Component: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("prefers-color-scheme: dark").matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const skills: skill[] = [
    { name: "React", img: React_Logo },
    { name: "TypeScript", img: Typescript },
    { name: "Node.js", img: node },
    { name: "Python", img: python },
    { name: "SQL", img: postgresql },
    { name: "Tailwind CSS", img: Tailwind_Logo },
    { name: "Git", img: git },
    { name: "Docker", img: docker },
    { name: "Springboot", img: springboot },
    { name: ".Net", img: dotnet },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    //add form logic here
  };

  return (
    <>
      <div id="webcrumbs">
        <div className="main-content">
          {/* Navbar */}
          <nav className="navbar">
            <div className="container nav-content">
              <a href="#home" className="logo">
                <span className="logo-bold">Harriet</span> Odhiambo
              </a>

              <div className="nav-links">
                <a href="#home" className="nav-link">
                  Home
                </a>
                <a href="#about" className="nav-link">
                  About
                </a>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>

                <button className="theme-button" type="button">
                  <span className="material-symbols-outlined">landscape</span>
                </button>
              </div>

              <details className="mobile-menu">
                <summary className="list-none mobile-menu-summary">
                  <span className="material-symbols-outlined">menu</span>
                </summary>
                <div className="mobile-dropdown">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                  <hr className="divider" />
                  <button
                    className="toggle-theme-btn"
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${
                      isDarkMode ? "light" : "dark"
                    } mode`}
                  >
                    <span className="material-symbols-outlined">
                      {isDarkMode ? "light_mode" : "dark_mode"}
                    </span>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </div>
              </details>
            </div>
          </nav>

          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="container hero-content">
              <div className="hero-text">
                <h2 className="hero-greeting">Hello, I'm</h2>
                <h1 className="hero-name">Harriet Odhiambo</h1>
                <h3 className="hero-title">Software Developer</h3>
                <p className="hero-description">
                  I build exceptional and accessible digital experiences for the
                  web.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary">
                    View Projects
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-container">
                  <div className="image-bg"></div>
                  <img
                    src={pic}
                    alt="Harriet Odhiambo"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section section-gray">
            <div className="container">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <div className="about-text">
                  <p>
                    I'm a software developer passionate about building
                    practical, user-focused applications. With experience in
                    React, Node.js, ASP.NET, and Python, I enjoy working across
                    both frontend and backend to create secure, scalable
                    solutions. I hold an Advanced Diploma in Software
                    Engineering from Centennial College and am currently
                    pursuing a Bachelor's in Information Technology at York
                    University. Outside of school, I love experimenting with
                    open-source projects and building small automations to solve
                    everyday problems.
                  </p>

                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/harriet-odhiambo-64778b374/"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                      href="https://github.com/Harrieguru"
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="#" className="social-link">
                      <span className="material-symbols-outlined">
                        download
                      </span>{" "}
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <h2 className="section-title">My Skills</h2>

            <div className="skills-grid">
              {skills.map((skill: skill, index: number) => (
                <div className="skill-card" key={index}>
                  <img src={skill.img} alt={skill.name} />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section section-gray">
            <div className="container">
              <h2 className="section-title">My Projects</h2>

              <div className="projects-grid">
                <div className="project-card">
                  <img src="" alt="Link2Lease" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">Link2Lease</h3>
                    <p className="project-description">
                      Link2Lease is a web and mobile app that connects tenants
                      and landlords directly, removing real estate agents. Its
                      AI chatbot guides users through property searches,
                      questions, viewings, and lease applications.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">React</span>
                      <span className="project-tag">Springboot</span>
                      <span className="project-tag">Postgresql</span>
                    </div>
                    <div className="project-buttons">
                      <a
                        href="https://github.com/Harrieguru/link2lease-backend"
                        className="btn-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <img src="" alt="Blog Platform" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">Content Management System</h3>
                    <p className="project-description">
                      A modern blogging platform with markdown support, user
                      authentication, and a responsive design.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">TypeScript</span>
                      <span className="project-tag">Next.js</span>
                      <span className="project-tag">PostgreSQL</span>
                      <span className="project-tag">Tailwind</span>
                    </div>
                    <div className="project-buttons">
                      <a href="#" className="btn btn-primary">
                        Live Demo
                      </a>
                      <a href="#" className="btn-icon">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <img
                    src=""
                    alt="Smart Resume Screener"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">Smart Resume Screener</h3>
                    <p className="project-description">
                      application which parses resumes and automatically rank
                      candidates against job descriptions
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">Python</span>
                      <span className="project-tag">FastAPI</span>
                      <span className="project-tag">PostgreSQL</span>
                      <span className="project-tag">PyTorch</span>
                    </div>
                    <div className="project-buttons">
                      <a href="#" className="btn btn-primary">
                        Live Demo
                      </a>
                      <a href="#" className="btn-icon">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <img src="" alt="AI Chatbot" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">AI Chatbot for Rentals</h3>
                    <p className="project-description">
                      AI-driven chatbot replacing realtors
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">React</span>
                      <span className="project-tag">Firebase</span>
                      <span className="project-tag">Redux</span>
                      <span className="project-tag">Material UI</span>
                    </div>
                    <div className="project-buttons">
                      <a href="#" className="btn btn-primary">
                        Live Demo
                      </a>
                      <a href="#" className="btn-icon">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <img
                    src={Portfolio}
                    alt="Portfolio Website"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">Portfolio site</h3>
                    <p className="project-description">
                      Portfolio website showcasing skills & projects
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">React</span>
                      <span className="project-tag">Typescript</span>
                      <span className="project-tag">CSS</span>
                      <span className="project-tag">Material UI</span>
                    </div>
                    <div className="project-buttons">
                      <a href="#" className="btn btn-primary">
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/Harrieguru/softeng-portfolio"
                        className="btn-icon"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a href="#" className="view-all-link">
                  View All Projects{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <div className="container">
              <h2 className="section-title">My Experience</h2>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="timeline-title">Backend Developer</h3>
                    <h4 className="timeline-company">Signvrse</h4>
                    <p className="timeline-date">Apr 2025 - Aug 2025</p>
                    <p className="timeline-description">
                      Back-end Developer maintaining systems running at scale.
                      Improved system performance by adding micro services and
                      integrating new components to the already existing system.
                      Implemented REST API's using Go ,Python coupled with
                      Postgres as a database and RabbitMQ as a message broker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section section-gray">
            <div className="container">
              <h2 className="section-title">Get In Touch</h2>

              <div className="contact-grid">
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <p>
                    Feel free to reach out to me for any questions or
                    opportunities. I'm always open to discussing new projects,
                    creative ideas, or opportunities to be part of your vision.
                  </p>

                  <div className="contact-details">
                    <div className="contact-item">
                      <span className="material-symbols-outlined">email</span>
                      <div>
                        <h4>Email</h4>
                        <p>hartie102@gmail.com</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      <div>
                        <h4>Location</h4>
                        <p>Toronto, CA</p>
                      </div>
                    </div>
                  </div>

                  <div className="social-icons">
                    <a
                      href="https://github.com/Harrieguru"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harriet-odhiambo-64778b374/"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>

                <div className="contact-form-container">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.smith@example.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="form-submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="container">
              <p>© 2025 Harriet Odhiambo. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
