import React, { useEffect, useState } from 'react'
import Head from "next/head"
import Image from 'next/image'
import styles from "../styles/WriteUps.module.scss"
import Navbar from './components/Navbar'
import Textfile from './components/Textfile'
import axios from "axios"
import LoadingDots from "./components/LoadingDots"
function Write_ups() {
    const [writeUps, setwriteUps] = useState([]);
    useEffect(() => {
        axios.get('/api/writeups').then(res => {
            setwriteUps(res.data)
        })
        setwriteUps(false)
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Write Ups</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,300;0,400;0,500;1,200&display=swap" rel="stylesheet" />

            </Head>
            <Navbar active="Writeups" />
            <div className={styles.main_container}>
                <div className={styles.title}>Write Ups</div>
                <div className={styles.writeups}>
                    {!writeUps && <div className={styles.loading}>
                        <LoadingDots />
                    </div>}
                    {writeUps && writeUps.map((obj, k) => {
                        return (
                            <Textfile key={k} name={obj.name} data={obj.data} />
                        )
                    })}
                </div>

            </div>
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

export default Write_ups