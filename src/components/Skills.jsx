import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['C++', 'Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: ['React.js', 'HTML', 'CSS']
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'Postman', 'Thunder Client', 'Figma']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>Technical Skills</span>
        </h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass hover-lift"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
