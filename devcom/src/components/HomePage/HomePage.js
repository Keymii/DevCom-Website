import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  
  <div className={styles.HomePage}>
    <div className={styles.navbardiv1}></div>
    <div className={styles.navbardiv2}></div>
    <div  className={styles.coverp}>
      <div  className={styles.coverpup}>Digitalizing </div>
      <div  className={styles.coverpup}>the</div>
      <div  className={styles.coverpup}>Future</div>
      <div  className={styles.coverpup}>Ahead</div> 
    </div>
    <div className={styles.cover}>
    </div>
    <div className={styles.empty1}></div>
    <div className={styles.aboutBox}>
      <div className={styles.aboutBox2}>
        <div className={styles.aboutText}>About</div>
        <div className={styles.aboutSnippet}>  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sapiente incidunt quo modi accusamus sit dolores a ab eligendi ex aliquid praesentium harum, omnis unde, eos, assumenda sunt maiores odit nisi adipisci!</p>
          <NavLink to="/about"><button className={styles.button}>Read More</button></NavLink>
</div>
      </div>
    </div>
    
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
