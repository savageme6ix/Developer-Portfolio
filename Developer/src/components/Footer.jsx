import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>Designed &amp; built by Your Name &mdash; {year}</p>
      </div>
    </footer>
  );
}
