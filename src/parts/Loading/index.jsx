import React from 'react';
import * as Fa from 'react-icons/fa';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <Fa.FaSpinner className={styles.spinner} size={36} />
            Loading...
        </div>
    )
}

export default Loading
