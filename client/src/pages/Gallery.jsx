import React, { useState } from 'react';
import '../styles/Gallery.css';

// Importing icons for lightbox
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('jim-corbett');
    const [selectedImage, setSelectedImage] = useState(null);

    // Placeholder data - using Unsplash images that match the vibe
    // Structure: { id, category, src, alt }
    const images = [
        // Deluxe Cottage (formerly jim-corbett)
        { id: 1, category: 'jim-corbett', src: '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.25 PM (1).jpeg', alt: 'Deluxe Cottage Exterior' },
        { id: 2, category: 'jim-corbett', src: '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.27 PM.jpeg', alt: 'Deluxe Cottage Interior' },
        { id: 3, category: 'jim-corbett', src: '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.28 PM.jpeg', alt: 'Deluxe Cottage View' },
        { id: 4, category: 'jim-corbett', src: '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.31 PM (1).jpeg', alt: 'Deluxe Cottage Bedroom' },
        { id: 5, category: 'jim-corbett', src: '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.32 PM.jpeg', alt: 'Deluxe Cottage Balcony' },
        { id: 6, category: 'jim-corbett', src: '/images/deluxe cottage/WhatsApp Image 2026-01-15 at 6.21.42 PM (1).jpeg', alt: 'Deluxe Cottage Amenities' },

        // Family Cottage (formerly bhimtal)
        { id: 10, category: 'bhimtal', src: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.22 PM (2).jpeg', alt: 'Family Cottage Exterior' },
        { id: 11, category: 'bhimtal', src: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.22 PM (3).jpeg', alt: 'Family Cottage View' },
        { id: 12, category: 'bhimtal', src: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.24 PM.jpeg', alt: 'Family Cottage Interior' },
        { id: 13, category: 'bhimtal', src: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.31 PM.jpeg', alt: 'Family Cottage Bedroom' },
        { id: 14, category: 'bhimtal', src: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.34 PM.jpeg', alt: 'Family Cottage Living Area' },
        { id: 15, category: 'bhimtal', src: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.40 PM (2).jpeg', alt: 'Family Cottage Garden' },

        // Garden (Mukteshwar category ID)
        { id: 20, category: 'mukteshwar', src: '/images/Garden/WhatsApp Image 2026-01-15 at 6.21.15 PM (1).jpeg', alt: 'Garden View 1' },
        { id: 21, category: 'mukteshwar', src: '/images/Garden/WhatsApp Image 2026-01-15 at 6.21.24 PM (1).jpeg', alt: 'Garden View 2' },
        { id: 22, category: 'mukteshwar', src: '/images/Garden/WhatsApp Image 2026-01-15 at 6.21.29 PM.jpeg', alt: 'Garden View 3' },
        { id: 23, category: 'mukteshwar', src: '/images/Garden/WhatsApp Image 2026-01-15 at 6.21.43 PM (1).jpeg', alt: 'Garden View 4' },
        { id: 24, category: 'mukteshwar', src: '/images/Garden/WhatsApp Image 2026-01-15 at 6.21.07 PM (1).jpeg', alt: 'Garden View 5' },
        { id: 25, category: 'mukteshwar', src: '/images/Garden/WhatsApp Image 2026-01-15 at 6.21.05 PM.jpeg', alt: 'Garden View 6' },
    ];

    const tabs = [
        { id: 'jim-corbett', label: 'DELUXE COTTAGE' },
        { id: 'bhimtal', label: 'FAMILY COTTAGE' },
        { id: 'mukteshwar', label: 'GARDEN' }
    ];

    const filteredImages = images.filter(img => img.category === activeTab);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    };

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <div className="gallery-hero">
                <div className="gallery-hero-overlay"></div>
                <div className="gallery-hero-content">
                    <h1>OUR GALLERY</h1>
                    <div className="breadcrumb">
                        <span>Home</span> <span className="separator">/</span> <span>Gallery</span>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <section className="gallery-section">
                {/* Tabs */}
                <div className="gallery-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="gallery-grid">
                    {filteredImages.map(image => (
                        <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
                            <div className="image-wrapper">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className="image-overlay">
                                    <span className="plus-icon">+</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="load-more-container">
                    <button className="load-more-btn">SHOW MORE</button>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}><IoClose /></button>

                    <button className="lightbox-nav prev" onClick={prevImage}><FaChevronLeft /></button>

                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>

                    <button className="lightbox-nav next" onClick={nextImage}><FaChevronRight /></button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
