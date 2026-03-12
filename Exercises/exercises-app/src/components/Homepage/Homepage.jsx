import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = ({ user }) => {
  return (
    <div>
      <h2>Greetings, {user.firstName}</h2>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? `${styles.buttonLink} ${styles.active}`
            : styles.buttonLink
        }
      >
        Go to Homepage
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? `${styles.buttonLink} ${styles.active}`
            : styles.buttonLink
        }
      >
        Contact Us
      </NavLink>
     </div>
  );
};

export default Homepage;

