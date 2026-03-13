import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} React Exercises. All rights reserved.</p>
      <p className={styles.tagline}>Learning React one exercise at a time</p>
    </footer>
  );
}

export default Footer;
