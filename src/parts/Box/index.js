import React from 'react';
import styles from './Box.module.css';

const Box = () => {
  const data = [
    {
      img: '/images/ui-ux.jpg',
      name: 'uiux',
      position: 'front',
    },
    {
      img: '/images/reactjs.jpg',
      name: 'reactjs',
      position: 'back',
    },
    {
      img: '/images/frontend.jpg',
      name: 'frontend',
      position: 'left',
    },
    {
      img: '/images/figma.jpg',
      name: 'figma',
      position: 'right',
    },
  ];
  return (
    <div className={styles.box}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.top}`} />
        <div className={`${styles.face} ${styles.bottom}`} />
        {data.map((item, index) => (
          <div className={`${styles.face} ${styles[item.position]}`} key={index}>
            <img
              src={item.img}
              alt={item.name}
              className={`bg-transparent ${styles.img}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
