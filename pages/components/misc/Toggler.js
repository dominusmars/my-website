import React, { useState, useEffect } from 'react'
import styles from "../../../styles/misc/Toggler.module.scss"

function Toggler({ setter, set }) {
    const [Active, setActive] = useState(0);
    useEffect(() => {
        setActive(set)
    }, [set]);
    var activate = () => {
        setter(!set)
    }
    return (
        <div className={styles.body} onClick={activate}>
            <span className={styles.top + (Active ? ` ${styles.active}` : "")}></span>
            <span className={styles.mid + (Active ? ` ${styles.active}` : "")}></span>
            <span className={styles.bottom + (Active ? ` ${styles.active}` : "")}></span>
        </div>
    )
}

export default Toggler