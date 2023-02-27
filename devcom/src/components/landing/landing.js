import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './landing.module.css';
import { Link, Router, NavLink } from 'react-router-dom';


var wordlist = ['Ideate.', 'Design.', 'Build.', 'Create.', 'Develop.']
var i = 0;


function navigate(page){
  Router.navigate(page)
}

const Landing = () => {
  const [word, setWord] = useState(wordlist[0]);
  useEffect(() => {
    // create a interval and get the id
    const myInterval = setInterval(() => {
      setWord(() => {
        if(i<4){
          i++;
          return wordlist[i]
        }
        else{
          i=0;
          return wordlist[i]
        }
      });
    }, 80);
    // clear out the interval using the id when unmounting the component
    return () => clearInterval(myInterval);
  }, []);
  return (
    <>
      <div className={styles.Landing}>
      <div className={styles.center_text}>
        {word}
      </div>
      </div>
      <div className={styles.circle}/>
      <div className={styles.dclogo}/>
      <div className={styles.homelogo}><Link to='/home'><a>Home</a></Link></div>
      <div className={styles.aboutlogo}><Link to='/about'><a>About</a></Link></div>
      <div className={styles.emptylogo}/>
    </>
  );
}


export default Landing;
