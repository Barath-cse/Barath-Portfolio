import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Blockchain-Based Secure File Integrity & Access Control System',
    category: 'Cybersecurity / Blockchain',
    image: '/project_placeholder_1.png',
    description: 'Decentralized platform ensuring file integrity via blockchain hashing, encrypted storage with smart contract access control, and tamper detection.',
    tech: ['React', 'Node.js', 'Solidity', 'Ethereum', 'AES-256']
  },
  {
    id: 2,
    name: 'Smart Habit Tracker with AI Recommendations',
    category: 'Productivity / AI',
    image: '/project_placeholder_2.png',
    description: 'Intelligent productivity platform featuring a rule-based AI engine for behavioral analysis, high-precision notification scheduling, and interactive data visualization dashboards.',
    tech: ['Java', 'Android SDK', 'Firebase', 'MPAndroidChart']
  },
  {
    id: 3,
    name: 'MultiModal RAG Enterprise (MM-RAG-E)',
    category: 'AI / Search',
    image: '/project_placeholder_3.png',
    description: 'High-fidelity RAG system enabling semantic intelligence from PDFs, Images (Vision), and Audio via 768-dim embeddings and a custom local vector engine for ultra-fast, privacy-first retrieval.',
    tech: ['React 19', 'Node.js', 'Gemini 2.5 Flash', 'Endee Vector DB']
  },
  {
    id: 4,
    name: 'FarmPortal - Digital Farm Management System',
    category: 'Full Stack / Agriculture',
    image: '/project_placeholder_4.png',
    description: 'A comprehensive web application for farmers to manage their agricultural activities, track expenses, monitor market prices, and generate performance reports.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express', 'MongoDB']
  }
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Selected Work</span>
          <h2 className="section-title">Innovative <br /><span className="gradient-text">Ventures</span></h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-row"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="project-media glass-panel">
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="media-overlay" />
                </div>

                <div className="project-details">
                  <span className="p-category">{project.category}</span>
                  <h3 className="p-title">{project.name}</h3>
                  <p className="p-desc">{project.description}</p>

                  <div className="p-tech-list">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>


                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
