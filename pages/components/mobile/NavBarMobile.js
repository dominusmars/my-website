import React, { useEffect, useState } from 'react'
import styles from '../../../styles/mobile/Navbar.module.scss'
import Image from 'next/image'
import Toggler from '../misc/Toggler';
import Link from 'next/link';
function NavBarMobile({ active }) {
    const [page, setPage] = useState(0);
    const [toggle, setToggle] = useState(false);
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
        function preventDefault(e) {
            e.preventDefault()
        }
        if (toggle) {
            window.addEventListener('touchmove', preventDefault)
        } else {
            window.removeEventListener('touchmove', preventDefault)
        }
        return () => {
            window.removeEventListener('touchmove', preventDefault)
        }
    }, [toggle])
    useEffect(() => {
        const movedNav = () => {
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
        window.addEventListener('scroll', movedNav)
        movedNav(window)
        switch (active) {
            case "Home":
                setPage(0)
                break;
            case "Resume":
                setPage(1)
                break;
            case "Writeups":
                setPage(2)
                break;
            case "Projects":
                setPage(3)
                break;
            default:
                break;
        }
        return () => {
            window.removeEventListener('scroll', movedNav)
        };
    }, []);
    return (
        <div className={styles.nav_body}>
            <div className={styles.nav_top_menu + (toggle ? ` ${styles.toggled}` : "")}>
                <div className={styles.toggle}>
                    <Toggler setter={setToggle} set={toggle} />
                </div>
                <div className={styles.icon_picture}>
                    <Image src="/favicon.ico" alt='icon' width={40} height={40} />
                </div>
            </div>

            {toggle && (
                <div className={styles.nav_bottom_menu}>
                    <Link href={"/"}>
                        <div className={(page == 0 ? styles.nav_curr : styles.nav_item) + " " + styles.nav_item_name}>
                            Home
                        </div>
                    </Link>
                    <Link href={"/resume"}>
                        <div className={(page == 1 ? styles.nav_curr : styles.nav_item) + " " + styles.nav_item_name}>
                            Resume
                        </div>
                    </Link>
                    <Link href={"/write_ups"}>
                        <div className={(page == 2 ? styles.nav_curr : styles.nav_item) + " " + styles.nav_item_name}>
                            Write Ups
                        </div>
                    </Link>
                    <Link href={"/Projects"}>
                        <div className={(page == 3 ? styles.nav_curr : styles.nav_item) + " " + styles.nav_item_name}>
                            Projects
                        </div>
                    </Link>

                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <Image src="/insta.svg" alt='insta' width={25} height={25} className={styles.nav_item} onClick={redirectInsta}>
                            </Image>
                        </div>
                        <div className={styles.icon}>
                            <Image src="/twitter.svg" alt='twitter' width={25} height={25} className={styles.nav_item} onClick={redirectTwitter}>
                            </Image>
                        </div>
                        <div className={styles.icon}>
                            <Image src="/github.svg" alt='github' width={25} height={25} className={styles.nav_item} onClick={redirectGithub} >
                            </Image>
                        </div>
                    </div>
                </div>
            )}
            {toggle && <span className={styles.nav_cover} onClick={() => {
                setToggle(!toggle)
            }}></span>}
        </div>
    )
}

export default NavBarMobile