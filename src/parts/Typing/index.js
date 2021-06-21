import React from "react";
import ReactDOM from "react-dom";
import Typical from "react-typical";
import styles from "./Typing.module.css";

const Typing = () => {
  return (
    <div className={styles.typing}>
      <Typical
        steps={[
          "Hello 🖐",
          500,
          "Hello 🖐 I'm Rima",
          500
        ]}
        loop={1}
        wrapper="h1"
        className={styles.h1}
      />
    </div>
  );
};

export default Typing;
