import React, { useState, useEffect } from 'react'
import styles from "../../styles/textfile.module.scss"
import Image from 'next/image';
function textfile({ name, data }) {
    const [toggle, settoggle] = useState(false);
    function onClick() {
        settoggle(!toggle)
    }
    var nameEdited = name.split('.')[0]
    return (
        <div className={styles.main_container}>
            <div className={styles.name_of_text}>
                <div className={styles.name} onClick={onClick}>
                    {nameEdited}
                </div>
                <div className={styles.arrow}>
                    <Image src={toggle ? "/downarrow.svg" : "/nextarrow.svg"} height={15} width={15} />
                </div>
            </div>

            {toggle && (
                <pre className={styles.data}>
                    {data}
                </pre>
            )}
        </div>
    )
}

export default textfile