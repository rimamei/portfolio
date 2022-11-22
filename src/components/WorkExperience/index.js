import { Link } from "react-router-dom";
import styles from "./WorkExperience.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading, Error } from "../../parts";
import { SRLWrapper } from "simple-react-lightbox";

const Project = () => {
  const experience = [
    {
      title: "Frontend Developer",
      place: "Studext, PT Telkom Indonesia",
      year: "Aug 2021 - Jan 2022",
    },
    {
      title: "Frontend Developer",
      place: "Inpoin, PT Telkom Indonesia",
      year: "Feb 2021 - Present",
    },
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.title}>
        <h1 className="font-section">Work Experience</h1>
      </div>
      <ul className={styles.list}>
        {experience.map((v, index) => (
          <li className={styles.li}>
            <div className={styles.animation}>
              <div
                className={
                  experience.length - 1 !== index
                    ? styles.circleline
                    : styles.circle
                }
              />
              {experience.length - 1 !== index && (
                <div className={styles.line} />
              )}
            </div>
            <div
              className={experience.length - 1 !== index && styles.marginBottom}
            >
              <h3>
                <b>{v.title}</b>
              </h3>
              <p>{v.place}</p>
              <p>{v.year}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
