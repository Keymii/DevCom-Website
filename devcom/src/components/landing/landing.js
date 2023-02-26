import React from 'react';
import PropTypes from 'prop-types';
import styles from './landing.module.css';
import { useNavigate } from 'react-router-dom';

var wordlist = ['Ideate.', 'Design.', 'Build.', 'Create.', 'Develop.', 'DevCom.']
function gothroughwords(){
  for (let i = 0; i< wordlist.length; i++) {
  const val = wordlist[i];
  return val
  }
}


const Landing = () => (
  <>
  <div className={styles.Landing}>
    <div className={styles.center_text}>
      {gothroughwords()}
    </div>
   </div>
  <div className={styles.circle}/>
  {setTimeout(() => {
    navigate('/home')
  }, 3000)}
  </>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
