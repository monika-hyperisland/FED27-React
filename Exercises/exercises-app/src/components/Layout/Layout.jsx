import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;