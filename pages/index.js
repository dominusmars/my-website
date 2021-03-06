import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import mobile from '../styles/mobile/Home.module.scss'
import NavBarMobile from './components/mobile/NavBarMobile'
import Navbar from './components/Navbar'

import { useEffect, useState } from 'react'
import Footer from './components/Footer'
export default function Home() {
  const [mobile, setMobile] = useState(1);
  const updateDim = () => {
    const mobile = window.innerWidth < 1300
    setMobile(mobile)
  }
  useEffect(() => {
    updateDim()
    window.addEventListener("resize", updateDim);
    return () =>
      window.removeEventListener("resize", updateDim);
  }, [])
  return (
    <div className={styles.container}>
      {mobile ? <NavBarMobile active={"Home"} /> : <Navbar active={"Home"} />}
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,300;0,400;0,500;1,200&display=swap" rel="stylesheet" />

      </Head>
      <div className={styles.first_container}>
        <div className={styles.title_container}>
          <div className={styles.main_title}>Mohamad Khawam</div>
          <div className={styles.sub_title}>Full-Stack Developer</div>
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.info_container}>
          <div className={styles.title}>Who Am I?</div>
          <div className={styles.paragraph}>I’ve been programming for about 7 years now. Started making C# apps and ended up studying computer science at Rutgers University. My knowledge of Node js allows me to build robust backends for websites and web apps. My background gives me the ability to learn new concepts quickly and deploy them at a professional level. I’ve also had a lot of experience programming in java and python. </div>

        </div>
        <div className={styles.info_container}>
          <div className={styles.title}>Why JavaScript?</div>
          <div className={styles.paragraph}>My introduction to Object-Oriented Programming (OOP) was with Java. I learned how to create objects based on the tasks each component needed to accomplish. One of the most important parts of coding is its readability. Due to the nature of code, readability is crucial to the deployment of applications. OOP gives code a better sense of readability and gives the programmer the ability to locate/fix bugs. Javascript is like a sister language to Java and includes OOP. Making JS and knowledge of JS important to the software industry. Node js is a framework which uses the V8 engine to run native JS in a desktop environment. It also has a large library of useful tools which help reduce the time it takes to make professional apps.</div>
        </div>
      </div>
      <div className={styles.third_container}></div>
      <div className={styles.text_container}>
        <div className={styles.info_container}>
          <div className={styles.title}>How I learned Javascript</div>
          <div className={styles.paragraph}>I first started coding in Java and C#. Slowly I learned the key concepts of programming. Through abstractions I was able to apply what I know to Javascript. A friend of mine wanted a way to mimic an anti-botting script called akamai. This was back in the days where akamai's was at version 2. I took the task to reverse engineer the script from scratch. With no knowledge of Javascript I set out to the task. Through this process I learned the inner workings of Javascript and successfully reverse engineered the script. I eventually made my way to learning node.js and the rest is now history</div>
        </div>
        <div className={styles.info_container}>
          <div className={styles.title}>Design</div>
          <div className={styles.paragraph}>Designing projects is hard work, but reducing the problem into its parts helps you take it step by step. Take time to understand the problem that your looking to fix. Develop a plan to tackle it.</div>
        </div>

      </div>
      <div className={styles.fifth_container}></div>
      <div className={styles.text_container}>
        <div className={styles.info_container}>
          <div className={styles.title}>Why did I make this Website?</div>
          <div className={styles.paragraph}>I wanted a way to display what I know. Todays coding interviews focus solely on the idea of speed and not as much on the abilities needed to code. We tend to forget just how much work goes into someones knowledge. Coding doesn't have to be a up hill battle. If you have the skills to be able to research and look up what you do not know. Slowly you can build the knowledge to code at a higher level. This goes for everything in life.
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}
