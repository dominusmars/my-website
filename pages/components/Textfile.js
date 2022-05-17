import React, { useState, useEffect } from 'react'
import styles from "../../styles/textfile.module.scss"
import Image from 'next/image';
function Textfile({ name, data }) {
    const [toggle, settoggle] = useState(false);
    const [title, setTitle] = useState(name)
    function onClick() {
        settoggle(!toggle)
    }
    useEffect(() => {
        setTitle(name.split('.')[0])
    }, [name]);
    return (
        <div className={styles.main_container}>
            <div className={styles.name_of_text}>
                <div className={styles.name} onClick={onClick}>
                    {title}
                </div>
                <div className={styles.arrow}>
                    <Image src={toggle ? "/downarrow.svg" : "/nextarrow.svg"} alt="arrow" height={15} width={15} />
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

export default Textfile