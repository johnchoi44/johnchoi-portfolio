import React from 'react'

import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>
                            My name is John Choi, and I am a senior at The Pennsylvania State University, majoring in Computational Data Science
                            with a minor in Mathemathics. My academic journey is enriched by a variety of internships
                            and research experineces that have equipped me with a strong foundation in machine learning, AI, and data analysis.
                        </p>
                        <br />
                        <p>
                            Most recently, as a Machine Learning Engineer at Nittany Ai Advance, I collaborated with the PlantVillage
                            team to create advanced computer vision models using Python and TensorFlow. My work has included developing
                            an algorithms for outlier dection and processing large-scale argriculural datasets stored on Amazon EC2.
                        </p>
                        <br />
                        <p>
                            Beyond academics, I am a curious lifelong learner who thrives on exploring interdisciplinary applications of AI to solve
                            real-world problems. In my free time, I enjoy golf, guitar, basketball, soccer, music, and movies.
                        </p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Technical Expertise</h3>
                        <ul>
                            <li>Programming Languages: Python, R, SQL, Java, JavaScript</li>
                            <li>Framework & Tools: TensorFlow, PyTorch, Spark, AWS, React.js, Node.js, Google Cloud Vertex AI</li>
                            <li>Skills: Machine Learning, Data Analysis, Computer Vision, Data Scraping, Sentiment Analysis, Full Stack Development, Leadership, Problem Solving, Critical Thinking, Interpersonal Communication</li>
                        </ul>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
  )
}

export default About
