import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSubOne}>
        <h4 className={styles.footerSubOneHeader}>Links</h4>
          <ul className={styles.listOne}>
            <li className={styles.listItem}>
              <a
                href=''
                className=''
              >
                Services
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href=''
                className=''
              >
                About
              </a>
            </li>

            <li className={styles.listItem}>
              <a
                href=''
                className=''
              >
                Tools
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href=''
                className=''
              >
                Process
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href=''
                className=''
              >
                Insights
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href=''
                className=''
              >
                Contact
              </a>
            </li>
            </ul>
        </div>
      </div>
      © 2024 Jon Harvey. All rights reserved.
    </footer>
  );
};

export default Footer;
