import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className={styles.dot}></span>
          Open to freelance work
        </motion.div>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Shaping Concepts<br />
          into Real Projects<br />
          that <span>Deliver Results</span>
        </motion.h1>
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          I build fast, responsive websites and web applications using React, 
          JavaScript, and modern frontend technologies.
          Based in Nairobi and available for freelance projects worldwide.
        </motion.p>
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <a href="#projects" className="btn-primary">View my work &rarr;</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </motion.div>
      </div>
    </section>
  );
}
