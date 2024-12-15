import React, { useEffect, useState } from 'react';
import Car1 from '../../assets/home/car1.jpg';
import Car2 from '../../assets/home/car2.jpg';
import Car3 from '../../assets/home/car3.jpg';
import Car4 from '../../assets/home/car4.jpg';
import Car5 from '../../assets/home/car5.jpg';

import styles from './home.module.css';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { img: Car1, text1: 'DRIVE YOUR DREAMS', text2: 'EXPERIENCE UNMATCHED LUXURY' },
        { img: Car2, text1: 'WHERE LUXURY MEETS PERFORMANCE', text2: 'INDULGE IN PREMIUM RIDES' },
        { img: Car3, text1: 'YOUR JOURNEY IN STYLE', text2: 'ARRIVE WITH PRESTIGE' },
        { img: Car4, text1: 'ELEVATE EVERY MILE', text2: 'THE PINNACLE OF CAR RENTALS' },
        { img: Car5, text1: 'UNLOCK EXCLUSIVITY', text2: 'FOR THE DISCERNING TRAVELER' },
    ];

    const textAnimations = [
        styles.fadeIn,
        styles.pulse,
        styles.bounce,
        styles.fadeIn,
        styles.bounceIn,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="w-full h-full relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute w-full h-full transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${slides[currentSlide].img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            <div
                className="absolute w-full h-full bg-black opacity-50 z-0"
            ></div>

            <div className={`absolute w-full h-full flex flex-col items-center justify-center gap-5 text-white text-2xl font-semibold z-10 ${textAnimations[currentSlide]}`}>
                <p className="text-8xl text-center font-bold">
                    {slides[currentSlide].text1}
                </p>
                <p className="font-bold">{slides[currentSlide].text2}</p>
            </div>
        </div>
    );
};

export default Home;
