import React, { useState } from 'react'

import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'

import styles from "./Experience.module.css"

const Experience = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggleShow = () => {
        setShowAll(!showAll);
    };
    
    const displayedHistory = showAll ? history : history.slice(0, 3);

    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experinece</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {displayedHistory.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}`}</h3>
                                    <h4>{`${historyItem.organisation}`}</h4>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                        return (
                                            <button key={id} className={styles.experienceButton}>{experience}</button>
                                        )})}
                                    </ul>
                                </div>
                            </li>
                        )})}
                </ul>
                {/* <div className={styles.skills}>
                    {skills.map((skills, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                                </div>
                                <p>{skills.title}</p>
                            </div>
                        )
                    })}
                </div> */}
                
            </div>
            {history.length > 3 && (
                    <button onClick={handleToggleShow} className={styles.seeMoreButton}>
                        {showAll ? "See Less" : "See More"}
                    </button>
                )}
        </section>
    )
}

export default Experience
