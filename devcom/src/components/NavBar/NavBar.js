import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import logo from '../../assets/DC_logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
  <div id='navbar' className={styles.NavBarCont}>
    <div>
      <div className={styles.NavBar}>
        <div className={styles.navflex1}>
          <div className={styles.navlogo}>
            <img src={logo} height='55'/>
          </div>
          <div className={styles.navitem}><NavLink to="/home"><a>Home</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/"><a>Projects</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/"><a>Team</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/"><a>Gallery</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/about"><a>About Us</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/"><a>Contact Us</a></NavLink></div>
        </div>
        </div>
    </div>
  </div>
  </>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
