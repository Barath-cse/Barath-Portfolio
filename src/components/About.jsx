import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="about-content-left">
            <span className="section-subtitle" style={{ display: 'block', marginBottom: '12px', textAlign: 'left' }}>Introduction</span>
            {/* Striking State-of-the-art Main Heading */}
            <h2 className="intro-cinematic-title" style={{ marginBottom: '32px' }}>
              Architecting <br />
              <span className="gradient-text">Intelligent</span> Systems
            </h2>

            {/* Stacked Bio Nodes replacing standard paragraph box */}
            <div className="bio-nodes-container">
              <div className="bio-node-item">
                <div className="node-glow-bar violet-bar"></div>
                <div className="node-content">
                  <span className="node-header">SOFTWARE ENGINEERING</span>
                  <motion.p 
                    className="node-desc"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.04, delayChildren: 0.3 }
                      }
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {"Computer Science student seeking an entry-level opportunity to apply core CS fundamentals and AI-assisted learning tools in real-world applications.".split(" ").map((word, i) => (
                      <motion.span 
                        key={i} 
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }} 
                        style={{ display: 'inline-block', marginRight: '5px' }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
              </div>

              <div className="bio-node-item">
                <div className="node-glow-bar cyan-bar"></div>
                <div className="node-content">
                  <span className="node-header">PROBLEM SOLVING</span>
                  <p className="node-desc">
                    Dedicated to applying strong algorithmic fundamentals and system optimization techniques to tackle complex real-world challenges efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Holographic Stat Modules Matrix */}
            <div className="intro-matrix-stats">
              <div className="matrix-stat-module">
                <div className="stat-top-line cyan-line"></div>
                <span className="matrix-num">4+</span>
                <span className="matrix-lbl">MAJOR PROJECTS</span>
              </div>

              <div className="matrix-stat-module">
                <div className="stat-top-line violet-line"></div>
                <span className="matrix-num">5+</span>
                <span className="matrix-lbl">CERTIFICATIONS</span>
              </div>
            </div>
          </div>

          <div className="about-content-right">
            <div className="about-image-container">
              <div className="image-border-glow" />
              <div className="about-image-wrapper glass-panel">
                <img src="/profile.jpg" alt="Profile" className="about-image" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
