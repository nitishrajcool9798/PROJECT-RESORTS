import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import IconNav from './IconNav';
import BookingBar from './BookingBar';
import '../styles/Hero.css';

const heroImages = [
    '/images/Logo/banner.jpg.jpeg', // Local Banner Image
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-slide effect
    // Auto-slide effect removed for static banner
    /*
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);
    */

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1));
    };

    return (
        <section className="hero">
            {/* Background Image Slider */}
            <div className="hero-backgrounds">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            {/* <div className="hero-overlay"></div> */}

            {/* Slider Arrows */}
            <div className="slider-arrow left" onClick={prevSlide}><FaArrowLeft /></div>
            <div className="slider-arrow right" onClick={nextSlide}><FaArrowRight /></div>

            <div className="hero-content container">
                {/* Hiding text to match screenshot clean look */}
            </div>

            {/* Icon Navigation Strip Overlay */}
            <div className="booking-container">
                <IconNav />
                <BookingBar />
            </div>
        </section>
    );
};

export default Hero;
