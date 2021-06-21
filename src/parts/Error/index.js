import React from "react";
import * as Fa from "react-icons/fa";
import styles from "./Error.module.css";

const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <Fa.FaTimes className={styles.times} size={36} />
      {props.children}
    </div>
  );
};

export default Loading;
