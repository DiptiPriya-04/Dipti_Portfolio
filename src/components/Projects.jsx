import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'URL Shortener (Ongoing)',
      description: 'Built scalable URL shortening service. Implemented REST APIs and optimized redirection. Handled collision scenarios and efficient database schema.',
      techStack: ['Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/DiptiPriya-04'
    },
    {
      title: 'GenAI Customer Support Auditor',
      description: 'Contributed to AI system for analyzing customer conversations. Implemented sentiment analysis and feedback automation.',
      techStack: ['Generative AI', 'APIs'],
      githubLink: 'https://github.com/DiptiPriya-04'
    },
    {
      title: 'Guess Number Game',
      description: 'Interactive web game with real-time feedback. Includes validation and dynamic UI.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/DiptiPriya-04'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>Featured Projects</span>
        </h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass hover-lift"
              variants={itemVariants}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.githubLink} className="project-link" aria-label="GitHub Repository">
                  <Code size={20} />
                  <span>Code</span>
                </a>
                {/* Optional external link */}
                <a href="#" className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                  <span>Live</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
