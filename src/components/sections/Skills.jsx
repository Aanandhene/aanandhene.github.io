import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Skills.module.css';

const Skills = () => {
  const { skills } = resumeData;

  const skillCategories = [
    { title: 'Languages', skills: skills.languages },
    { title: 'Frameworks', skills: skills.frameworks },
    { title: 'Databases', skills: skills.databases },
    { title: 'Tools & Methods', skills: skills.tools }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
    >
      <motion.div
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className={styles.skillCategory}
            variants={itemVariants}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div
        className={styles.certifications}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.certificationsTitle}>Certifications</h3>
        <div className={styles.certificationsList}>
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={styles.certificationBadge}
              whileHover={{ scale: 1.05 }}
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
