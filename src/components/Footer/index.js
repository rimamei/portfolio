import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy; 2021. Built By Rima Mei Handayani. 2D Animation by{" "}
        <a className={styles.link} href="http://freepik.com" target="_blank" rel="noopener noreferrer">
          Freepik
        </a>
      </p>
    </div>
  );
};

export default Footer;
