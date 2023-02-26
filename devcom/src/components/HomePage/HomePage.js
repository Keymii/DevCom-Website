import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = () => (
  
  <div className={styles.HomePage}>
    <div className={styles.cover}>
      <div  className={styles.coverp}>Digitalizing  the<br/>Future <br/> Ahead </div>
    </div>
    <div className={styles.empty1}></div>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
