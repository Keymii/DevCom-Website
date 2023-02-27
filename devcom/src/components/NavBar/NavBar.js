import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import logoB from '../../assets/DC_logo.png';
import logoW from '../../assets/logo_white.png';
import { NavLink } from 'react-router-dom';
const goToBottom=()=>{
  window.scrollTo({
    top:10000,
    behavior: 'smooth',
});
};


const NavBar = () => (
  <>
  <div id='navbar' className={styles.NavBarCont}>
    <div>
      <div className={styles.NavBar}>
        <div className={styles.navflex1}>
          <NavLink to="/"><div className={styles.navlogo}>
            <img src={logoB} height='55' />
          </div></NavLink>
          <div className={styles.navitem}><NavLink to="/home"  onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><a>Home</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/projects"  onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><a>Projects</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/team"  onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><a>Team</a></NavLink></div>
          <div className={styles.navitem}><NavLink to="/about"  onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><a>About Us</a></NavLink></div>
          <div className={styles.navitem}><a onClick={goToBottom}>Contact Us</a></div>
        </div>
        </div>
    </div>
  </div>
  </>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
