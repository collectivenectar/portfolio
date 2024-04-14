import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
      <nav className={styles.navBar}>
        <a className={styles.siteLogo}><i></i></a>
        <ul className={styles.navBarList}>
          <li className={styles.navBarListItem}><Link href="/" className={styles.navLinks}>Home</Link></li>
          <li className={styles.navBarListItem}><Link href="/about" className={styles.navLinks}>About</Link></li>
          <li className={styles.navBarListItem}><Link href="/services" className={styles.navLinks}>Services</Link></li>
          <li className={styles.navBarListItem}><Link href="/portfolio" className={styles.navLinks}>Portfolio</Link></li>
          <li className={styles.navBarListItem}><Link href="/insights" className={styles.navLinks}>Insights</Link></li>
        </ul>
        <button className={styles.contactButton}>contact</button>
      </nav>
    </header>
    )
}

export default Header;