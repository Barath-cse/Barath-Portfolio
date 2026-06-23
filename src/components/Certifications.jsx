import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    title: "Web Development Intern",
    issuer: "Let's GameTech, Coimbatore",
    date: "Training",
    description: "Completed Web Development Internship.",
  },
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    date: "Certificate",
    description: "Certification in Java Programming principles and concepts.",
  },
  {
    title: "Database Programming with PL/SQL",
    issuer: "Oracle Academy",
    date: "Certificate",
    description: "Certification in database design and PL/SQL programming.",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Certificate",
    description: "Completed fundamental training in Cybersecurity principles.",
  },
  {
    title: "Cyber Security: Endpoint Defense",
    issuer: "Infosys Springboard",
    date: "Certificate",
    description: "Certification focused on endpoint defense strategies in cybersecurity.",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="cert-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">Milestones of <br /> <span className="gradient-text">Excellence</span></h2>
        </motion.div>
        
        <div className="cert-timeline">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>
              
              <div className="timeline-card glass-panel">
                <div className="card-header">
                  <span className="cert-year">{cert.date}</span>
                  <h3 className="cert-name">{cert.title}</h3>
                </div>
                <p className="cert-org">{cert.issuer}</p>
                <p className="cert-detail">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
