import React, { useState, useEffect } from 'react'
import styles from '../../styles/Navbar.module.scss'
import Image from 'next/image'
import Link from "next/link"

function Navbar() {
    const [redirects, setRedirects] = useState([
        "https://github.com/dominusmars",
        "https://www.instagram.com/mohamad_khawam/",
        "https://twitter.com/Dominusmars"
    ]);
    function redirectGithub() {
        window.location.href = redirects[0];
    }
    function redirectInsta() {
        window.location.href = redirects[1];
    }
    function redirectTwitter() {
        window.location.href = redirects[2];
    }
    useEffect(() => {
        document.title = "Mohamad Khawam";
        function movedNav(win) {
            var e = document.getElementsByClassName(styles.nav_body)[0]
            if (window.scrollY == 0) {
                e.style.backgroundColor = "rgba(255, 255, 255, 0)"
                e.style.color = `rgba(255, 255, 255, 1)`
                return;
            }
            if (window.scrollY <= 50) {
                var ratio = window.scrollY / 50;
                var color = 255 - (ratio * 255);
                e.style.backgroundColor = `rgba(255, 255, 255, ${ratio})`
                e.style.color = `rgba(${color}, ${color}, ${color}, 1)`
                return;
            }
            e.style.backgroundColor = `rgba(255, 255, 255, ${1})`
            e.style.color = `rgba(0, 0, 0, 1)`

        }
        window.addEventListener('scroll', (e) => movedNav(e))
        movedNav(window)
    })
    return (
        <div className={styles.nav_body}>
            <div className={styles.icon_picture}>
                <Image src="/icon.png" alt='icon' width={40} height={40} />
            </div>
            <div className={styles.nav_items}>
                <Link href={"/"}>
                    <div className={styles.nav_item + " " + styles.nav_item_name}>
                        Home
                    </div>
                </Link>
                <Link href={"/resume"}>
                    <div className={styles.nav_item + " " + styles.nav_item_name}>
                        Resume
                    </div>
                </Link>
                <Link href={"/write_ups"}>
                    <div className={styles.nav_item + " " + styles.nav_item_name}>
                        Write Ups
                    </div>
                </Link>
                <Link href={"projects"}>
                    <div className={styles.nav_item + " " + styles.nav_item_name}>
                        Projects
                    </div>
                </Link>

                <Image src="/insta.svg" alt='insta' width={25} height={25} className={styles.nav_item} onClick={redirectInsta}>
                </Image>
                <Image src="/twitter.svg" alt='twitter' width={25} height={25} className={styles.nav_item} onClick={redirectTwitter}>
                </Image>
                <Image src="/github.svg" alt='github' width={25} height={25} className={styles.nav_item} onClick={redirectGithub} >
                </Image>
            </div>
        </div >
    )
}

export default Navbar