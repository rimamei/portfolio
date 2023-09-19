import styles from './About.module.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapperAbout}>
        <div className={styles.left}>
          <img
            className="bg-transparent"
            src="/images/foto-round.jpg"
            alt="rima"
            width="200"
            height="200"
          />
        </div>
        <div className={styles.right}>
          <p className={styles.p}>
            Hello there! I&apos;m a frontend developer based in Indonesia. I
            specialize in creating production-ready websites with tools like
            ReactJS and NextJS, also applying unit testing. Beyond frontend, I
            also possess knowledge in backend, UI/UX, and Docker. Let&apos;s
            collaborate to bring your digital vision to life! 🌟
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={576}
            offset={-70}
          >
            <button className={`button ${styles.btnabout}`}>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
