import React, { useState } from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = ({ onToggleAbout }) => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.slider} style={{"--quantity": 6}}>
          {/* <div className={styles.item} style={{"--position": 1}}><img src={getImageUrl("hero/white1.png")} alt="keyword1" /></div> */}
          <div className={styles.item} style={{"--position": 1}}><img src={getImageUrl("hero/white2.png")} alt="keyword2" /></div>
          <div className={styles.item} style={{"--position": 2}}><img src={getImageUrl("hero/white7.png")} alt="keyword3" /></div>
          <div className={styles.item} style={{"--position": 3}}><img src={getImageUrl("hero/white4.1.png")} alt="keyword4" /></div>
          <div className={styles.item} style={{"--position": 4}}><img src={getImageUrl("hero/white5.png")} alt="keyword5" /></div>
          <div className={styles.item} style={{"--position": 5}}><img src={getImageUrl("hero/white6.png")} alt="keyword6" /></div>
          <div className={styles.item} style={{"--position": 6}}><img src={getImageUrl("hero/white8.png")} alt="keyword6" /></div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>John Choi</h1>
        <div className={styles.heroImgWrapper}>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.socialButtons}>
          <a
            href="mailto:psuybc5222@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.circleButton}
          ><img src={getImageUrl("logo/email.png")} alt="email Logo" className={styles.logoImg} />
          </a>
          <a
            href="https://github.com/johnchoi44"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.circleButton}
          ><img src={getImageUrl("logo/github.png")} alt="Github Logo" className={styles.logoImg} />
          </a>
          <a
            href="https://linkedin.com/in/choi-yongjun"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.circleButton}
          ><img src={getImageUrl("logo/linkedin.png")} alt="Linkedin Logo" className={styles.logoImg} />
          </a>
        </div>
        <div className={styles.navButtons}>
          <a href={getImageUrl("hero/resume.pdf")} target="_blank" className={styles.navButton}>Résumé</a>
          <a href="#about" onClick={onToggleAbout} className={styles.navButton}>About Me</a>
          <a href="#experience" className={styles.navButton}>Experience</a>
          <a href="#projects" className={styles.navButton}>Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
