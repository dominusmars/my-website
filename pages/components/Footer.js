import React from 'react'
import styles from "../../styles/Footer.module.scss"
import Image from 'next/image'

function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>

                </a>
                <a>
                    Created With{' '}
                    <span className={styles.logo}>
                        <Image src="/Nextjs-logo.svg" alt="Next JS Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Footer