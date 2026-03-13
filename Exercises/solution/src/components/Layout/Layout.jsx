import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useTheme } from '../../context/ThemeContext';
import styles from './Layout.module.css';

function Layout({ children }) {
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.layout} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
