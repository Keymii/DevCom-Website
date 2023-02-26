import React from "react";
import styles from './Footer.module.css';
import logo from '../../assets/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
return (
<div className={styles.Footer}>
    <div className={styles.icon}><div className={styles.img}><img height='60' src={logo} /></div></div>
    <div className={styles.bar}><div className={styles.Btop}></div><div className={styles.Bbottom}></div></div>
    <div className={styles.container}>
        <div className={styles.Ctop}>
            <p>Contact us</p>
        </div>
        <div className={styles.Cbottom}>
            <FontAwesomeIcon icon={faInstagram} />&nbsp;
            <FontAwesomeIcon icon={faFacebook} />&nbsp;
            <FontAwesomeIcon icon={faLinkedin} />&nbsp;
            <FontAwesomeIcon icon={faTwitter} />&nbsp;
            <FontAwesomeIcon icon={faEnvelope} />
        </div>
    </div>
</div>
);
};
export default Footer;
