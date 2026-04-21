import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Internshala Student Partner',
      company: 'Internshala',
      duration: 'Aug 2024 – Present',
      description: 'Managed campus promotions and student engagement initiatives.'
    },
    {
      role: 'Virtual Internship (Batch 13)',
      company: 'Infosys',
      duration: 'Past',
      description: 'Worked on GenAI-powered Customer Support Quality Auditor.'
    },
    {
      role: 'Infosys Springboard',
      company: 'Infosys',
      duration: 'Aug 2025 – Oct 2025',
      description: 'Training in Artificial Intelligence and Cloud Computing.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  <Briefcase size={16} />
                </div>
                {index !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="timeline-content glass hover-lift">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
