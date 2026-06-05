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
              I'm a self-taught frontend developer from Nairobi with a passion for
              building things that work beautifully. Over the past year I've learned
              HTML, CSS, JavaScript, and React — shipping real projects along the way.
            </p>
            <br />
            <p>
              I care deeply about clean code, fast load times, and interfaces that
              just make sense. I'm now open to freelance work: landing pages, web
              apps, UI components, and more.
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
