import React, { useEffect, useState } from 'react';
import { FaHiking, FaBinoculars, FaTree, FaMountain, FaSun, FaTimes } from 'react-icons/fa';
import '../styles/Tours.css';

const Tours = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [
        "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.01 PM.jpeg",
        "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.04 PM.jpeg",
        "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.06 PM.jpeg",
        "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.10 PM (2).jpeg",
        "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.21 PM (1).jpeg",
        "/images/Hills/WhatsApp Image 2026-01-15 at 6.21.25 PM.jpeg"
    ];

    const openLightbox = (img) => {
        setSelectedImage(img);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div className="tours-page">
            {/* Hero Section */}
            <section className="tours-hero">
                <div className="tours-hero-overlay"></div>
                <div className="tours-hero-content container">
                    <h1>Explore the Wild</h1>
                    <p>Tours, Tracking & Mountain Adventures</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="tours-intro container">
                <div className="intro-text">
                    <h2>Unveil the Hidden Trails</h2>
                    <p>
                        Pangoot is a paradise for nature lovers and adventure enthusiasts.
                        Surrounded by dense oak and rhododendron forests, our resort offers
                        exclusive access to some of the most breathtaking hiking trails and
                        bird-watching spots in the region. Whether you seek a peaceful nature walk
                        or an adrenaline-fueled trek, the mountains call to you.
                    </p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <FaHiking className="feature-icon" />
                        <h3>Guided Treks</h3>
                        <p>Professional guides leading you through safe and scenic mountain paths.</p>
                    </div>
                    <div className="feature-card">
                        <FaBinoculars className="feature-icon" />
                        <h3>Bird Watching</h3>
                        <p>Home to over 250 bird species, perfect for photography and observation.</p>
                    </div>
                    <div className="feature-card">
                        <FaSun className="feature-icon" />
                        <h3>Sunrise Points</h3>
                        <p>Witness the golden peaks of the Himalayas at dawn from exclusive viewpoints.</p>
                    </div>
                    <div className="feature-card">
                        <FaTree className="feature-icon" />
                        <h3>Jungle Safari</h3>
                        <p>Experience the flora and fauna of the deep forest up close.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="tours-gallery container">
                <h2>Moments from the Mountains</h2>
                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="gallery-item" onClick={() => openLightbox(img)}>
                            <img src={img} alt={`Tours and Tracking ${index + 1}`} />
                            <div className="gallery-overlay">
                                <span className="plus-icon">+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <FaTimes />
                        </button>
                        <img src={selectedImage} alt="Full Size View" />
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="tours-cta">
                <div className="container">
                    <h2>Ready for Adventure?</h2>
                    <p>Book your stay and let us arrange a customized tour package for you.</p>
                    <a href="/contact" className="btn-primary">Contact Us to Plan</a>
                </div>
            </section>
        </div>
    );
};

export default Tours;
