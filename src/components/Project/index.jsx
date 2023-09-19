import { Link } from 'react-router-dom';
import styles from './Project.module.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Loading, Error } from '../../parts';
import ProjectList from '../../data/projects.json';
import Tag from '../../data/tags.json';

const Project = () => {
  // const [project, setProject] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       setLoading(true);
  //       let { data } = await axios.get(
  //         `${process.env.REACT_APP_URL}/api/v1/project`
  //       );
  //       setLoading(false);
  //       setProject(data.data);
  //     } catch (err) {
  //       setLoading(false);
  //       setError(err.message);
  //     }
  //   };

  //   fetch();
  // }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.title}>
        <h1 className="font-section">MY PROJECT</h1>
      </div>
      {/* {loading ? (
        <Loading />
      ) : error ? (
        <Error>{error}</Error>
      ) : ( */}
      {ProjectList.map((item) => {
        const filterTag = Tag.filter((el) => {
          return item.tagId.some((v) => {
            return el._id === v._id;
          });
        });

        return (
          <div className={`flex-evenly ${styles.project}`} key={item._id}>
            <div className={styles.left}>
              {/* <SRLWrapper> */}
              <img className={styles.img} src={item.image} alt={item.title} />
              {/* </SRLWrapper> */}
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
                {filterTag.map((itemTag) => (
                  <button key={itemTag._id} className={styles.btnProject}>
                    {itemTag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
