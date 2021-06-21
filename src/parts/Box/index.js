import React from "react";
import styles from "./Box.module.css";

const Box = () => {
  return (
    <div className={styles.box}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.top}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
        <div className={`${styles.face} ${styles.front}`}>
          <img src="/images/ui-ux.png" alt="ui-ux" className={styles.img} />
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <img src="/images/reactjs.png" alt="react" className={styles.img} />
        </div>
        <div className={`${styles.face} ${styles.left}`}>
          <img src="/images/frontend.png" alt="frontend" className={styles.img} />
        </div>
        <div className={`${styles.face} ${styles.right}`}>
          <img src="/images/figma.png" alt="react" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Box;
