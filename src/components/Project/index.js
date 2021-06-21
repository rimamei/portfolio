import { Link } from "react-router-dom";
import styles from "./Project.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading, Error } from "../../parts";

const Project = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        let { data } = await axios.get(
          `${process.env.REACT_APP_URL}/api/v1/project`
        );
        setLoading(false);
        setProject(data.data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetch();
  }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.title}>
        <h1 className="font-section">MY PROJECT</h1>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        project.map((item) => (
          <div className={`flex-evenly ${styles.project}`} key={item._id}>
            <div className={styles.left}>
              <img className={styles.img} src={item.image} alt={item.title} />
            </div>
            <div className={styles.right}>
              <div>
                <div className={styles.name}>
                  <Link
                    to={{
                      pathname: `${item.link}`,
                    }}
                    target="_blank"
                  >
                    <h3 className={styles.fontTitle}>{item.title}</h3>
                  </Link>
                </div>
                <div className={styles.desc}>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.tag}>
                {item.tagId.map((itemTag) => (
                  <button key={itemTag._id} className={styles.btnProject}>
                    {itemTag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Project;
