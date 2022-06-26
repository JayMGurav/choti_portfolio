import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img from "../public/xl2.png";
import levitate from "../public/float.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-2 -2 32 36" fill="none" role="img" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.8399 3.37015C20.7187 6.78236 22.4514 11.1854 22.4514 15.9999C22.4514 20.8145 20.7187 25.2175 17.8399 28.6297L21.8346 31.9999C25.479 27.6802 27.6778 22.0935 27.6778 15.9999C27.6778 9.90643 25.479 4.3197 21.8346 0L17.8399 3.37015ZM9.3857 9.46704C9.3857 11.6319 7.63076 13.3868 5.46593 13.3868C3.3011 13.3868 1.54615 11.6319 1.54615 9.46704C1.54615 7.30221 3.3011 5.54727 5.46593 5.54727C7.63076 5.54727 9.3857 7.30221 9.3857 9.46704ZM8.07902 20.5731V25.7994C8.07902 26.9399 7.77504 28.0352 7.01642 28.9835C6.33251 29.8383 5.43413 30.3702 4.6746 30.7499L2.3373 31.9186L0 27.244L2.3373 26.0753C2.59293 25.9475 2.75276 25.8509 2.85266 25.7802V20.5731H8.07902Z" fill="black"></path>
          </svg>
        </div>
        <a href="mailto:arjoo.design@gmail.com">arjoo.design@gmail.com</a>
      </div>
      <div className={styles.main} style={{
          position:'relative',
          overflow:'hidden'
        }}>
          <div style={{
          position:'absolute',
          bottom:'0%',
          transform:'scale(1.2)',
          right:0
        }}>
          {/* h */}
          <Image src={img} alt="profile" width={582} height={400}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.intro}>
          {/* <h1>Hey I’m Arjoo, User Experience Designer.</h1> */}
          <h1>Hey I’m Arjoo, User Experience Designer.</h1>
          <p>As an individual who is equal parts contributor and leader, I excel at bringing clarity to the design vision by redefining the user-flows and information architecture schema. Am currently leading the design at <a href="https://greatescape.co/" target="_blank" rel="noopener noreferrer">GreatEscape</a>, have redesigned and shipped the platform for better usability.</p>
        </div>
      <div className={styles.getInTouch}>
        <h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style={{
            userSelect: "none",
            width: 24,
            height: 24,
            display:" inline-block",
            fill: "rgb(0, 0, 0)",
            flexShrink: 0}}>
              <g color="rgb(0, 0, 0)" >
                <path d="M69.65685,218.34315a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,1,0-11.3137L144,80l32,32Z" opacity="0.6" fill="var(--color-6)"></path>
                <line x1="216" y1="128" x2="216" y2="176" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="192" y1="152" x2="240" y2="152" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="84" y1="40" x2="84" y2="80" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="64" y1="60" x2="104" y2="60" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="168" y1="184" x2="168" y2="216" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <line x1="152" y1="200" x2="184" y2="200" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                <rect x="14.86292" y="105.37258" width="226.27417" height="45.25483" rx="8" transform="translate(-53.01934 128) rotate(-45)" strokeWidth="16" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" fill="none"></rect>
                <line x1="144" y1="80" x2="176" y2="112" fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              </g>
          </svg>
          Get in Touch!
        </h3>
        <p style={{margin:0}}>Hey, have any suggestions, questions or concerns, Feel free Mail me. You can also find me in Dribble, LinkedIn. Help me make this better drop me a message and I’ll get back to you soon. Thanks!
        </p>
      </div>
        <footer className={styles.footer}>
          <div className={styles.hireMe}>
            <span>HIRE ME</span>
            <p>I&apos;m currently open to work and am taking on new projects</p>
            <div>
              
              <a href="mailto:arjoo.design@gmail.com">Drop me a mail</a>
            </div>
          </div>
          <div className={styles.hireMe}>
              <span>CONNECT</span>
            <ul>
              <li><a href="https://linkedin.com/arjoochauhan" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://dribble.com/arjoochauhan" target="_blank" rel="noopener noreferrer">Dribble</a></li>
              <li><a href="https://behance.com/arjoochauhan1" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="mailto:arjoo.design@gmail.com" >Email</a></li>
            </ul>
          </div>
        </footer>
      </div>
        <div className={styles.doodle}>
          <Image src={levitate} alt="profile" width={200} height={200}/> 
        </div>
    </div>
  )
}

export default Home
