import React, { useState, useEffect } from "react";
import pic from "../assets/pic.jpg";
import cover from "../assets/cover.png";
import ebook from "../assets/ebook.png";
import gamezone from "../assets/gamezone.png";
import link2lease from "../assets/link2lease.png";
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
import { Hero } from "./Hero"; // use relative path
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

                <button
                  className="theme-button"
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                >
                  <span className="material-symbols-outlined">
                    {isDarkMode ? "light_mode" : "dark_mode"}
                  </span>
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
                  {/* <button
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
                  </button> */}
                </div>
              </details>
            </div>
          </nav>

          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="container hero-content">
              <div className="hero-text">
                {/* <h2 className="hero-greeting">Hello, I'm</h2>
                <h1 className="hero-name">Harriet Odhiambo</h1>
                <h3 className="hero-title">Software Developer</h3> */}
                {/* Hero typed */}
                <Hero />
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
              {/* <div className="hero-image">
                <div className="image-container">
                  <div className="image-bg"></div>
                  <img
                    src={pic}
                    alt="Harriet Odhiambo"
                    className="profile-image"
                  />
                </div>
              </div> */}
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
                    {/* <a href="#" className="social-link">
                      <span className="material-symbols-outlined">
                        download
                      </span>{" "}
                      Resume
                    </a> */}
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
                  <img
                    src={link2lease}
                    alt="Link2Lease"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">Link2Lease</h3>
                    <p className="project-description">
                      Link2Lease is a web and mobile app that connects tenants
                      and landlords directly. Its AI chatbot guides users
                      through property searches, questions, viewings, and lease
                      applications.
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
                  <img
                    src={cover}
                    alt="Blog Platform"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">
                      Cover Letter Generator Platform
                    </h3>
                    <p className="project-description">
                      A full stack web app that generates personalized cover
                      letters by analyzing resumes and job descriptions, built
                      with a React frontend, Flask backend, and Cohere API.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">Typescript</span>
                      <span className="project-tag">Flask</span>
                      <span className="project-tag">Gemini API</span>
                    </div>
                    <div className="project-buttons">
                      {/* <a href="#" className="btn btn-primary">
                        Live Demo
                      </a> */}
                      <a
                        href="https://github.com/Harrieguru/Cover-Letter-Generator-Platform"
                        className="btn-icon"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <img
                    src={gamezone}
                    alt="GameZone ecommerce platform"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">GameZone</h3>
                    <p className="project-description">
                      A fully functional game store web application built with
                      HTML, CSS, and JavaScript, featuring product browsing with
                      search and filters, a shopping cart and wishlist, checkout
                      flow, and in memory state management.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">HTML5</span>
                      <span className="project-tag">CSS3</span>
                      <span className="project-tag">JavaScript</span>
                    </div>
                    <div className="project-buttons">
                      <a
                        href="https://gamezzone.netlify.app/"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/Harrieguru/GameZone"
                        className="btn-icon"
                      >
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
                      <a
                        href="https://harrietodhiambo.netlify.app/"
                        className="btn btn-primary"
                      >
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
                    <h3 className="timeline-title">
                      Full Stack Developer Intern
                    </h3>
                    <h4 className="timeline-company">Cuddles Learning</h4>
                    <p className="timeline-date">Nov 2025 - Present</p>
                    <p className="timeline-description">
                      Contributed to the development and improvement of an
                      educational web platform serving over 150 active users.
                      Built and refined responsive frontend features using React
                      and TypeScript, while supporting backend services and
                      database interactions to enable core application
                      functionality. Collaborated closely with the team to
                      optimize performance, improve user experience, and
                      maintain scalable, data driven workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="timeline-title">Software Engineer Intern</h3>
                    <h4 className="timeline-company">Signvrse</h4>
                    <p className="timeline-date">May 2025 - Aug 2025</p>
                    <p className="timeline-description">
                      Built secure and scalable APIs with REST and GraphQL,
                      implemented authentication and data validation, and
                      designed accessible React interfaces compliant with WCAG
                      2.1. Prototyped interactive 3D sign language experiences
                      using Three.js with real time hand tracking integration.
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

              <div className="">
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <p>
                    Feel free to reach out to me for any questions or
                    opportunities. I'm always open to discussing new projects
                    and creative ideas.
                  </p>

                  <div className="contact-details">
                    <div className="">
                      <span className="material-symbols-outlined">email</span>
                      <div className="dcontact">
                        <h4>Email</h4>
                        <p>hartie102@gmail.com</p>
                      </div>
                    </div>

                    <div className="">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      <div className="dcontact">
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
