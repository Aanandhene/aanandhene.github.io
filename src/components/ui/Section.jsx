import { motion } from 'framer-motion';
import styles from './Section.module.css';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = ''
}) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.underline} />
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default Section;
