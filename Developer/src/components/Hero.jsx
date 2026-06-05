import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Open to freelance work
        </div>
        <h1 className={styles.heading}>
          Shaping Concepts<br />
          into Real Projects<br />
          that <span>Deliver Results</span>
        </h1>
        <p className={styles.sub}>
          I build clean, fast, and responsive web experiences using React, HTML/CSS,
          and JavaScript. Based in Nairobi — working with clients globally.
        </p>
        <div className={styles.ctaRow}>
          <a href="#projects" className="btn-primary">View my work &rarr;</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
