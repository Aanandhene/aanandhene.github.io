import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Projects.module.css';

const Projects = () => {
  const { projects } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Key projects I've worked on"
    >
      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.folderIcon}>
                <FiExternalLink size={24} />
              </div>
              <div className={styles.cardLinks}>
                <motion.a
                  href="#"
                  className={styles.cardLink}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View project"
                >
                  <FiExternalLink size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className={styles.cardLink}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View code"
                >
                  <FiGithub size={20} />
                </motion.a>
              </div>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.projectMeta}>
              <span className={styles.role}>
                <strong>Role:</strong> {project.role}
              </span>
              <span className={styles.duration}>
                <strong>Duration:</strong> {project.duration}
              </span>
            </div>

            <ul className={styles.highlights}>
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
