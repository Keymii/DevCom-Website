import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = () => (
  
  <div className={styles.HomePage}>
    <div className={styles.navbardiv1}></div>
    <div className={styles.navbardiv2}></div>
    <div  className={styles.coverp}>Digitalizing <br/>the<br/>Future <br/> Ahead </div>
    <div className={styles.cover}>
    </div>
    <div className={styles.empty1}></div>
    <div className={styles.box1}></div>
    
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
