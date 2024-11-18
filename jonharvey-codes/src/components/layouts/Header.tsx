import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
      <nav className={styles.navBar}>
        <a className={styles.siteLogo}><img className='rounded-3xl' src={'/icons/favicon.png'}></img></a>
        {/* <ul className={styles.navBarList}>
          <li className={styles.navBarListItem}><Link href="/" className={styles.navLinks}>home</Link></li>
          <li className={styles.navBarListItem}><Link href="/about" className={styles.navLinks}>about</Link></li>
          <li className={styles.navBarListItem}><Link href="/services" className={styles.navLinks}>services</Link></li>
          <li className={styles.navBarListItem}><Link href="/portfolio" className={styles.navLinks}>portfolio</Link></li>
          <li className={styles.navBarListItem}><Link href="/insights" className={styles.navLinks}>insights</Link></li>
        </ul> */}
        <a href='#contact' className={styles.contactButton}>contact</a>
      </nav>
    </header>
    )
}

export default Header;