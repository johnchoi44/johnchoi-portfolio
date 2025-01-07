import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:psuybc5222@gmail.com">psuybc5222@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/LinkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/choi-yongjun/">linkedin.com/choi-yongjun</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                    <a href="https://www.github.com/johnchoi44/">github.com/johhnchoi44</a>
                </li>
            </ul>
        </footer>

    )
}

export default Contact
