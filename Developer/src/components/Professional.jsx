import styles from './Professional.module.css';

const values = [
  {
    title: 'Quality Focus',
    description:
      'Every line of code and every pixel is intentional. I write clean, maintainable code and craft polished interfaces that feel refined — not rushed.',
  },
  {
    title: 'Reliable Communication',
    description:
      'You will always know where things stand. I respond promptly, share progress updates, and keep conversations transparent so there are no surprises.',
  },
  {
    title: 'On-time Delivery',
    description:
      'Deadlines matter. I scope work realistically, manage expectations early, and deliver on schedule without cutting corners on quality.',
  },
];

export default function Professional() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className="section-label">How I work</p>
        <div className={styles.grid}>
          {values.map(({ title, description }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.badge}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
