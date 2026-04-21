import { motion } from 'framer-motion';
import { GraduationCap, FileBadge } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>Education & Certifications</span>
        </h2>
        
        <div className="edu-cert-grid">
          <motion.div 
            className="edu-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="column-header">
              <GraduationCap size={28} className="icon-accent" />
              <h3>Education</h3>
            </div>
            
            <div className="edu-card glass hover-lift" style={{ marginBottom: '1.5rem' }}>
              <h4 className="degree">B.Tech in Information Technology</h4>
              <p className="institution">B.P. Poddar Institute of Management and Technology</p>
              <div className="edu-details">
                <span className="year">2023 - 2027</span>
                <span className="grade">CGPA: 8.08</span>
              </div>
            </div>

            <div className="edu-card glass hover-lift" style={{ marginBottom: '1.5rem' }}>
              <h4 className="degree">Class XII</h4>
              <div className="edu-details" style={{ marginTop: '0.5rem' }}>
                <span className="grade">Score: 80%</span>
              </div>
            </div>

            <div className="edu-card glass hover-lift">
              <h4 className="degree">Class X</h4>
              <div className="edu-details" style={{ marginTop: '0.5rem' }}>
                <span className="grade">Score: 80%</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="cert-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="column-header">
              <FileBadge size={28} className="icon-accent" />
              <h3>Certifications & Achievements</h3>
            </div>
            
            <div className="cert-list">
              <div className="cert-card glass hover-lift">
                <h4>Infosys Springboard Certification</h4>
              </div>
              
              <div className="cert-card glass hover-lift">
                <h4>Coursera Web Development Certification</h4>
              </div>
              
              <div className="cert-card glass hover-lift">
                <h4>SEO Certification</h4>
              </div>

              <div className="cert-card glass hover-lift">
                <h4>Winner – Extempore Competition</h4>
                <p>Won against 50+ teams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
