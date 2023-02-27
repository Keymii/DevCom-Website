import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.module.css';
const Projects = () => (
  <div className={styles.Projects}>
    <div className={styles.navbardiv1}></div>
    <div className={styles.navbardiv2}></div>
 
   
    <div className={styles.cover}>
    <div className={styles.coverContent}>
      <div className={styles.projectIcons}></div>
    <div  className={styles.coverp}>Our <br/>Projects</div>
    </div>
    </div>
    <div className={styles.empty1}></div>
    <div className={styles.aboutBox}>
      <div className={styles.aboutBox2}>
        <div className={styles.aboutText}>About</div>
        <div className={styles.aboutSnippet}>  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sapiente incidunt quo modi accusamus sit dolores a ab eligendi ex aliquid praesentium harum, omnis unde, eos, assumenda sunt maiores odit nisi adipisci!</p>
         
</div>
      </div>
    </div>
    
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
