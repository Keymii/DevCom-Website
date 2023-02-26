import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import logo from '../../assets/DC_logo.png';

const NavBar = () => (
  <div className={styles.NavBarCont}>
    <div>
      <div className={styles.NavBar}>
        <div className={styles.navflex1}>
          <div className={styles.navlogo}>
            <img src={logo} height='55'/>
          </div>
          <div className={styles.navitem}><p>Home</p></div>&nbsp;&nbsp;&nbsp;
          <div className={styles.navitem}><p>Projects</p></div>&nbsp;&nbsp;&nbsp;
          <div className={styles.navitem}><p>Team</p></div>&nbsp;&nbsp;&nbsp;
          <div className={styles.navitem}><p>Gallery</p></div>&nbsp;&nbsp;&nbsp;
          <div className={styles.navitem}><p>About Us</p></div>&nbsp;&nbsp;&nbsp;
          <div className={styles.navitem}><p>Contact Us</p></div>
        </div>
        </div>
    </div>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
