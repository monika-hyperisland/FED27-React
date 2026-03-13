import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

function Homepage({ user }) {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.greeting}>Greetings, {user.firstName}</h1>
      <p className={styles.subtitle}>Welcome back to our React application!</p>
      
      <div className={styles.userInfo}>
        <img src={user.avatar} alt={`${user.firstName}'s avatar`} className={styles.avatar} />
        <div className={styles.details}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.address.city}, {user.address.state}</p>
        </div>
      </div>
      
      <Link to="/contact" className={styles.contactButton}>
        <button type="button">Contact Us</button>
      </Link>
    </div>
  );
}

export default Homepage;
