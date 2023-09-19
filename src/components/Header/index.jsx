import styles from "./Header.module.css";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`flex-between ${styles.headerWrapper}`}>
          <div>
            <h1 className={styles.brand}>RIMA MEI HANDAYANI</h1>
          </div>

          <div className={`flex-center ${styles.nav}`}>
            <ul>
              <li className="mr-16">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={576}
                  offset={-70}
                >
                  HOME
                </Link>
              </li>
              <li className="mr-16">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={576}
                  offset={-70}
                >
                  ABOUT
                </Link>
              </li>
              <li className="mr-16">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={576}
                  offset={-70}
                >
                  PROJECT
                </Link>
              </li>
            </ul>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={576}
              offset={-70}
            >
              <button className={`button ${styles.btnheader}`}>CONTACT</button>
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.navMobile}>
        <div className={styles.iconGroup}>
          <Link to="home" spy={true} smooth={true} duration={576}>
            <Ai.AiFillHome size={24} />
            <p>Home</p>
          </Link>
        </div>
        <div className={styles.iconGroup}>
          <Link to="about" spy={true} smooth={true} duration={576} offset={-50}>
            <Ai.AiOutlineUser size={24} />
            <p>About</p>
          </Link>
        </div>
        <div className={styles.iconGroup}>
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={576}
            offset={-50}
          >
            <Fa.FaLightbulb size={24} />
            <p>Project</p>
          </Link>
        </div>
        <div className={styles.iconGroup}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={576}
            offset={-50}
          >
            <Md.MdContactMail size={24} />
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
