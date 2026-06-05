import styles from './Skills.module.css';

const skills = [
  { label: 'HTML5',             icon: 'ti-brand-html5' },
  { label: 'CSS3',              icon: 'ti-brand-css3' },
  { label: 'JavaScript',        icon: 'ti-brand-javascript' },
  { label: 'React',             icon: 'ti-brand-react' },
  { label: 'Git & GitHub',      icon: 'ti-brand-git' },
  { label: 'Responsive Design', icon: 'ti-layout' },
  { label: 'Flexbox / Grid',    icon: 'ti-vector' },
  { label: 'REST APIs',         icon: 'ti-api' },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <div className={styles.grid}>
          {skills.map(({ label, icon }) => (
            <div key={label} className={styles.chip}>
              <i className={`ti ${icon}`} aria-hidden="true"></i>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
