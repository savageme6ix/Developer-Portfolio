import styles from './About.module.css';

const stats = [
  { num: '5+',   label: 'Projects shipped' },
  { num: '1yr',  label: 'Self-taught journey' },
  { num: '100%', label: 'Remote friendly' },
  { num: 'Fast', label: 'Turnaround time' },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <p className="section-label">About me</p>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
            I'm a frontend developer from Nairobi who builds fast,
             responsive web applications with React, JavaScript, and modern web technologies.
              Over the past years I've designed and deployed projects ranging from e-commerce websites and AI-powered tools to productivity apps
               and API-driven platforms. 
              
            </p>
            <br />
            <p>
            I care deeply about clean code, performance, and creating user experiences that feel intuitive from the first click. 
            I'm currently available for freelance work including landing pages, business websites, web applications,
            and custom UI development.
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map(({ num, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
