import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar = () => (
  <div className={styles.NavBar}>
    <div className={styles.navflex1}>
    <div className={styles.navitem}>Home</div>
    <div className={styles.navitem}>Projects</div>
    <div className={styles.navitem}>Team</div>
    <div className={styles.navitem}>Gallery</div>
    <div className={styles.navitem}>About Us</div>
    <div className={styles.navitem}>Contact Us</div>
    </div>
    <div className={styles.navflex2}>
    <div className={styles.navlogo}>Home</div>
    </div>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
