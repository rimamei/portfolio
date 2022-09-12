import React from "react";
import styles from "./About.module.css";
import { Link } from "react-scroll";

const About = () => {
  return (
      <div className={styles.about}>
        <div className={styles.wrapperAbout}>
          <div className={styles.left}>
            <img
              src="/images/foto-round.png"
              alt="rima"
              width="200"
              height="200"
            />
          </div>
          <div className={styles.right}>
            <p className={styles.p}>
              My name is Rima Mei Handayani. An Indonesia based frontend
              developer. Despite being a Frontend Developer, I also have
              knowledge in UI/UX and backend. Designing website and turn it into
              a real website that anyone can use easily makes me really happy. I
              always strive for clean design and clean code.
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={576}
              offset={-70}
            >
              <button className={`button ${styles.btnabout}`}>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default About;
