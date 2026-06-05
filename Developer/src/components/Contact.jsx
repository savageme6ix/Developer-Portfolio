import styles from './Contact.module.css';

const socials = [
  { href: 'https://github.com/savageme6ix', icon: 'ti-brand-github', label: 'GitHub' },
  { href: 'https://linkedin.com', icon: 'ti-brand-linkedin', label: 'LinkedIn' },
  { href: 'https://twitter.com',  icon: 'ti-brand-x',        label: 'Twitter' },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.heading} style={{ marginBottom: '5px' }}>
              Let's build<br />something great.
            </h2>
            <p className={styles.email} style={{ color: 'white' }}>dslamp0@gmail.com</p>
            <a href="mailto:dslamp0@gmail.com" className="btn-primary">
              Send me an email &rarr;
            </a>
          </div>
          <div className={styles.socials}>
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
                aria-label={label}
              >
                <i className={`ti ${icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
