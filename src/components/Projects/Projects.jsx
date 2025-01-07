import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from './ProjectCard';
import PopUp from './PopUp';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <BsArrowLeftCircleFill onClick={prevSlide} className={styles.arrowLeft} />
            <div className={styles.carousel}>
                <div className={styles.projectContainer1} onClick={prevSlide}>
                    <ProjectCard project={
                        currentIndex === 0 
                            ? projects[projects.length - 1] 
                            : projects[currentIndex - 1]
                        }
                    />
                </div>
                <div className={styles.projectContainer}>
                    <ProjectCard
                        project={projects[currentIndex]}
                        onClick={() => handleProjectClick(projects[currentIndex])}
                    />
                </div>
                <div className={styles.projectContainer2} onClick={nextSlide}>
                    <ProjectCard
                        project={
                            currentIndex === projects.length - 1 
                                ? projects[0] 
                                : projects[currentIndex + 1]
                        }/>
                </div>
            </div>
            <BsArrowRightCircleFill onClick={nextSlide} className={styles.arrowRight} />
            <div className={styles.indicators}>
                {projects.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`${styles.indicator} ${
                                currentIndex === idx ? styles.active : ""
                            }`}
                        ></button>
                    )
                })}
            </div>
            {selectedProject && <PopUp project={selectedProject} onClose={closePopup} />}
        </section>
    )
}

export default Projects


// 3D
// .banner {
//     width: 100%;
//     height: 100vh;
//     text-align: center;
//     overflow: hidden;
//     position: relative;
// }

// .slider {
//     position: absolute;
//     width: 200px;
//     height: 250px;
//     top: 10%;
//     left: calc(50% - 100px);
//     transform-style: preserve-3d;
//     transform: perspective(1000px);
//     animation: autoRun 20s linear infinite;
//     z-index: 2;
// }

// @keyframes autoRun {
//     from {
//         transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
//     }
//     to {
//         transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
//     }
// }

// .item {
//     position: absolute;
//     inset: 0 0 0 0;
//     transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
//         translateZ(550px);
// }

// .item img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }

// .arrowLeft,
// .arrowRight {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     background: rgba(0, 0, 0, 0.5);
//     color: white;
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     cursor: pointer;
//     z-index: 20;
// }

// .arrowLeft {
//     left: 10px;
// }

// .arrowRight {
//     right: 10px;
// }

// .indicators {
//     display: flex;
//     justify-content: center;
//     margin-top: 20px;
// }

// .indicator {
//     width: 10px;
//     height: 10px;
//     margin: 0 5px;
//     border-radius: 50%;
//     background-color: rgba(255, 255, 255, 0.1);
//     border: none;
//     cursor: pointer;
// }

// .indicator.active {
//     background-color: rgba(255, 255, 255, 1);
// }

// .arrowLeft:hover,
// .arrowRight:hover {
//     cursor: pointer;
// }
