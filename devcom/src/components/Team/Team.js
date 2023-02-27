import React from 'react';
import useFetch from "./useFetch";
import PropTypes from 'prop-types';
import styles from './Team.module.css';
import img1 from './DC_logo.png';

// async function jsonChecker(){
//   const response_ocs = await fetch('http://localhost:7000/OCs');
//   const ocs = await response_ocs.json();
//   const response_pls = await fetch('http://localhost:7000/PLs');
//   const pls = await response_pls.json();
//   return [ocs, pls];
// }

const db = {
  "OCs":[
      {
          "id":1,
          "name": "Dev Moxaj Desai",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":2,
          "name": "Shruti Singh",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      }
  ],
  "PLs":[
      {
          "id":1,
          "name": "Palash Mittal",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":2,
          "name": "harsh Jha",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      },
      {
          "id":3,
          "name": "Adithya Krishna",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":4,
          "name": "Ashwin Ramchandran",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      },
      {
          "id":5,
          "name": "Ayush Kapoor",
          "img": " ",
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      }
  ]
}

const Team = () => {

  return (
    <div className={styles.Team}>
    <div className={styles.OCs}>{db.OCs.map((OC) => 
      <li key={OC.id}>
        <img src={img1} height='55'/>
      </li>
    )}</div>
  </div>
  );
}

export default Team;
