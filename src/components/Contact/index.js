import React from "react";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";
// import { Form } from "../../parts";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`line ${styles.contact}`}>
      <h1 className={`font-section ${styles.fontTitle}`}>Contact</h1>
      <div className={`flex-between ${styles.contactWrapper}`}>
        {/* <div className={styles.left}>
          <Form />
        </div> */}
        <div className={`flex-column ${styles.right}`}>
          <div className={`flex-center`}>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/rima-mei-handayani-a8a98b135/",
              }}
              target="_blank"
            >
              <Fa.FaLinkedin className={styles.icon} color="#2867B2" />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/rimamei",
              }}
              target="_blank"
            >
              <Fa.FaGithubSquare className={styles.icon} color="#211F1F" />
            </Link>
          </div>
          <div className={styles.flex}>
            <Link
              to={{
                pathname: "https://twitter.com/rimamei02",
              }}
              target="_blank"
            >
              <Fa.FaTwitterSquare className={styles.icon} color="#00acee" />
            </Link>
            <Link
              to={{
                pathname: "https://medium.com/@rimamei098",
              }}
              target="_blank"
            >
              <Fa.FaMedium className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
