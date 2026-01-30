import React, { useEffect, useState } from 'react';
import { FaLeaf, FaHandsHelping, FaMountain, FaHistory, FaHeart } from "react-icons/fa";
import '../styles/About.css';

const aboutImages = [
    "/images/Garden/WhatsApp Image 2026-01-15 at 6.21.29 PM.jpeg", // Hero
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", // CTA Parallax
];

const teamImages = [
    "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.21 PM.jpeg",
    "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.25 PM.jpeg",
    "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.12 PM.jpeg"
];

const values = [
    {
        icon: <FaMountain />,
        title: "Authenticity",
        desc: "We strive to offer guests a genuine experience of mountain life while preserving the natural beauty and cultural richness of Pangot."
    },
    {
        icon: <FaLeaf />,
        title: "Sustainability",
        desc: "Sustainability is at the heart of our operations—we follow eco-friendly practices and support the local community through responsible tourism."
    },
    {
        icon: <FaHandsHelping />,
        title: "Warm Hospitality",
        desc: "We are committed to creating a peaceful, welcoming environment where every guest can relax, reconnect with nature, and leave with lasting memories."
    }
];

const About = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        const fadeElems = document.querySelectorAll('.animate-on-scroll');
        fadeElems.forEach(el => observer.observe(el));

        return () => fadeElems.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="about-page">

            {/* Parallax Hero Section */}
            <div className="about-hero">
                <div
                    className="hero-bg-layer"
                    style={{
                        backgroundImage: `url('${aboutImages[0]}')`,
                        transform: `translateY(${scrolled * 0.5}px)` // Parallax effect
                    }}
                ></div>
                <div className="hero-overlay"></div>

                <div className="hero-content fade-in-up">
                    <p className="sub-heading">Discover</p>
                    <h1>Our Story</h1>
                    <p className="tagline">Where Nature Meets Soul</p>
                </div>
            </div>

            {/* Intro / Mission Section */}
            <section className="about-intro container animate-on-scroll">
                <div className="intro-content">
                    <h5>OUR MISSION</h5>
                    <h2>A Sanctuary in The Clouds</h2>
                    <div className="line-gold"></div>
                    <p>
                        At <span className="highlight-gold">Hilltop Pangoot</span>, our mission is to offer guests a peaceful and authentic Himalayan experience
                        by blending warm hospitality with the untouched beauty of nature. We aim to create a tranquil
                        retreat where travelers can unwind, reconnect with nature, and enjoy personalized service in
                        a sustainable, eco-friendly environment.
                    </p>
                    <p>
                        We believe in the power of nature to heal and rejuvenate. Every corner of our resort is designed
                        to bring you closer to the serene landscapes of Pangot, offering a sanctuary away from the chaos of city life.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="about-values">
                <div className="container values-grid-container">
                    <div className="section-header-center animate-on-scroll">
                        <h5>OUR CORE VALUES</h5>
                        <h2>What We Stand For</h2>
                        <div className="line-gold"></div>
                    </div>

                    <div className="features-grid">
                        {values.map((val, index) => (
                            <div key={index} className="feature-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="feature-icon">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section - Moments of Serenity */}
            <section className="about-gallery container">
                <div className="section-header-center animate-on-scroll">
                    <h5>GLIMPSES</h5>
                    <h2>Moments of Serenity</h2>
                    <div className="line-gold"></div>
                </div>

                <div className="gallery-masonry">
                    {teamImages.map((img, index) => (
                        <div key={index} className="gallery-item-masonry animate-on-scroll">
                            <img src={img} alt={`Moments ${index + 1}`} />
                            <div className="overlay-hover">
                                <FaHeart />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section-parallax" style={{ backgroundImage: `url('${aboutImages[1]}')` }}>
                <div className="cta-overlay"></div>
                <div className="cta-content container">
                    <h2>Experience the Serenity</h2>
                    <p>Come, let the mountains heal you. Book your stay with us today.</p>
                    <a
                        href="/contact"
                        className="btn-reserve"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </div>
    );
};

export default About;
