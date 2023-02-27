import React from 'react';
import useFetch from "./useFetch";
import PropTypes from 'prop-types';
import styles from './Team.module.css';
import img1 from '../../assets/avatars/DevDesai.jpg'
import img2 from '../../assets/avatars/Shruti Singh - Shruti.jpg'
import img3 from '../../assets/avatars/Palash Mittal.jpg'
import img4 from '../../assets/avatars/Harsh Jha.png'
import img5 from '../../assets/avatars/Adithya Krishna K.jpg'
import img6 from '../../assets/avatars/Ashwin Ram.jpg'
import img7 from '../../assets/avatars/ayush kapoor.jpg'
import img8 from '../../assets/avatars/DevDesai.jpg'
import img9 from '../../assets/avatars/DevDesai.jpg'
import img10 from '../../assets/avatars/DevDesai.jpg'
import img11 from '../../assets/avatars/DevDesai.jpg'
import img12 from '../../assets/avatars/DevDesai.jpg'
import img13 from '../../assets/avatars/DevDesai.jpg'
import img14 from '../../assets/avatars/DevDesai.jpg'
import img15 from '../../assets/avatars/DevDesai.jpg'

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
          "img":img1,
          "fb": "https://m.facebook.com/dev.desai.77920?ref=bookmarks",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":2,
          "name": "Shruti Singh",
          "img": img2,
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      }
  ],
  "PLs":[
      {
          "id":3,
          "name": "Palash Mittal",
          "img": img3,
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":4,
          "name": "harsh Jha",
          "img": img4,
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      },
      {
          "id":5,
          "name": "Adithya Krishna",
          "img": img5,
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":6,
          "name": "Ashwin Ramchandran",
          "img": img6,
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      },
      {
          "id":7,
          "name": "Ayush Kapoor",
          "img": img7,
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
        <img src={OC.img} height='55'/>
      </li>
    )}</div>
    <div className={styles.PLs}>{db.PLs.map((PL) => 
      <li key={PL.id}>
        <img src={PL.img} height='55'/>
      </li>
    )}</div>
  </div>
  );
}

export default Team;
