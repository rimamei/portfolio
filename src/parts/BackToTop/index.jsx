import styles from "./BackToTop.module.css";
import * as Ai from "react-icons/ai";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 900) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [visible]);

  return (
    <div className={styles.backToTop}>
      {visible && (
        <div>
          <Link to="home" spy={true} smooth={true} duration={576}>
            <button className={`button ${styles.btn}`}>
              <Ai.AiOutlineArrowUp className={styles.icon} />
              Back To Top
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
