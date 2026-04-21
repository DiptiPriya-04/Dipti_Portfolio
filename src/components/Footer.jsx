import { Code, User, Terminal } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              &lt;Dipti<span>Priya</span> /&gt;
            </a>
            <p>Building efficient backends and beautiful frontends.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/dipti-priya-a314302b1/" aria-label="LinkedIn" className="social-icon">
              <User size={20} />
            </a>
            <a href="https://github.com/DiptiPriya-04" aria-label="GitHub" className="social-icon">
              <Code size={20} />
            </a>
            <a href="https://leetcode.com/u/Dipti_04/" aria-label="LeetCode" className="social-icon">
              <Terminal size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dipti Priya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
