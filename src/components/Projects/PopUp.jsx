import React, { useState } from 'react';
import styles from './PopUp.module.css';

// import { getImageUrl } from '../../utils';

const PopUp = ({ project, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const { source, title, youtubeLink, screenshots } = project;

    const mediaItems = youtubeLink
        ? [{ type: 'video', src: youtubeLink }, ...screenshots.map((src) => ({ type: 'image', src }))]
        : screenshots.map((src) => ({ type: 'image', src }));

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };
  
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.slider}>
                    {mediaItems.length > 2 && (
                        <button className={styles.arrow} onClick={prevSlide}>
                            ◄
                        </button>
                    )}
                    <div className={styles.media}>
                        {mediaItems[currentSlide].type === 'video' ? (
                            <iframe
                                className={styles.video}
                                src={youtubeLink}
                                title={title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img
                                src={screenshots[currentSlide]}
                                alt={`Screenshot ${currentSlide + 1}`}
                                className={styles.content}
                            />
                        )}
                    </div>
                    {mediaItems.length > 2 && (
                        <button className={styles.arrow} onClick={nextSlide}>
                        ►
                        </button>
                    )} 
                </div>
                <div className={styles.indicators}>
                    {screenshots.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`${styles.indicator} ${currentSlide === idx ? styles.active : ''}`}
                        ></button>
                ))}
                </div>
                <div className={styles.links}>
                    <a href={source} target="_blank" className={styles.link}>Check it Out</a>
                </div>
            </div>
        </div>
    );
};

export default PopUp
