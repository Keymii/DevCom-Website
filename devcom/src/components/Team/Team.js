import React from 'react';
import useFetch from "./useFetch";
import PropTypes from 'prop-types';
import styles from './Team.module.css';
import db from './membersDB';

const Team = () => {

  return (
    <div className={styles.Team}>
      <div className={styles.navbardiv1}></div>
    <div className={styles.navbardiv2}></div>
    <div  className={styles.coverp}>
      <div  className={styles.coverpup}>Meet </div>
      <div  className={styles.coverpup}>the</div>
      <div  className={styles.coverpup}>Team</div>
      <div  className={styles.coverpup}>DevCom</div> 
    </div>
    <div className={styles.cover}>
    </div>
    <div className={styles.empty1}></div>
    <div className={styles.aboutBox}>
      <div className={styles.aboutBox2}>
        <div className={styles.aboutText}>Overall<br/> Coordinators</div>
        <div className={styles.aboutSnippet}>  <p>
          <div className={styles.OCs}>{db.OCs.map((OC) => 
      <div>
        <img src={OC.img}   className={styles.image}/>
        <div>{OC.name}</div>
      </div>
    )}</div>
        </p>
</div>
      </div>
    </div>
    <div className={styles.empty1}></div>
    <div className={styles.aboutBox}></div>
    
    
    <div className={styles.PLs}>{db.PLs.map((PL) => 
      <div>
        <img src={PL.img} height='200'/>
      </div>
    )}</div>
  </div>
  );
}

export default Team;
