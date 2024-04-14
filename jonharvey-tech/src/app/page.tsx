import styles from "./page.module.css";

import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className={styles.home}>
    <section className={styles.hero}>
     <Hero />
    </section>
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>Detail your professional background here.</p>
    </section>
    <section className={styles.services}>
      <h2>Services Offered</h2>
      <p>Overview of the services you provide.</p>
    </section>
    <section className={styles.portfolio}>
      <h2>Portfolio & Success Stories</h2>
      <p>Highlights of your past projects and achievements.</p>
    </section>
    <section className={styles.insights}>
      <h2>Insights</h2>
      <p>Quick links or summaries to articles or insights you&aposve written.</p>
    </section>
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <button >Get In Touch</button>
    </section>
  </div>
  );
}
