import React, { useState } from 'react'
import styles from "../../../styles/misc/Toggler.module.scss"

function Toggler({ setter, set }) {
    const [Active, setActive] = useState(0);
    var activate = () => {
        setActive(!Active)
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