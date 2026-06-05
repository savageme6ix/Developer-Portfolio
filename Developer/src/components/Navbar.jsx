import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>Thomas.dev</a>
        <ul className={styles.links}>
          <li><a href="#projects">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className={styles.cta}>Hire me</a></li>
        </ul>
      </div>
    </nav>
  );
}
