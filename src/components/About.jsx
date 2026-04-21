import { motion } from 'framer-motion';
import { BookOpen, Award, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>About Me</span>
        </h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am a B.Tech IT student (2023–2027) maintaining an 8.08 CGPA. I have a strong interest in backend development, data structures, and real-world problem solving.
            </p>
            <p>
              Beyond my core studies, I have gained hands-on experience with AI and cloud technologies through Infosys Springboard, and I'm an active contributor and student partner, demonstrating leadership and teamwork.
            </p>
          </motion.div>

          <motion.div 
            className="about-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="about-card glass hover-lift" variants={itemVariants}>
              <div className="card-icon">
                <BookOpen size={24} />
              </div>
              <h3>Academics</h3>
              <p>B.Tech IT student (2023–2027) with an <strong>8.08 CGPA</strong>, focusing on data structures and backend logic.</p>
            </motion.div>

            <motion.div className="about-card glass hover-lift" variants={itemVariants}>
              <div className="card-icon">
                <Terminal size={24} />
              </div>
              <h3>Tech & AI</h3>
              <p>Experience with AI and cloud technologies through Infosys Springboard and building GenAI solutions.</p>
            </motion.div>

            <motion.div className="about-card glass hover-lift" variants={itemVariants}>
              <div className="card-icon">
                <Award size={24} />
              </div>
              <h3>Leadership</h3>
              <p>Active student partner and contributor, managing campus initiatives and engaging in teamwork.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
