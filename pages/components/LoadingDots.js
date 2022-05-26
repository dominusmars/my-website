import React from 'react'
import styles from "../../styles/loading.module.scss"
function LoadingDots() {
    return (
        <div className={styles.body}>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <span>Loading...</span>
        </div>
    )
}

export default LoadingDots