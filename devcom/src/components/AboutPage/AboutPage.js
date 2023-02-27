import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutPage.module.css';
import NavBar from '../NavBar/NavBar';

const AboutPage = () => (
  <>
  <div className={styles.AboutPage}>
    
    <div className={styles.cover}>
    <div  className={styles.coverp}>What  is  DevCom </div>
    </div>
    <div className={styles.empty1}></div>
    <div className={styles.box1}></div>
  </div>
  </>
);

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
