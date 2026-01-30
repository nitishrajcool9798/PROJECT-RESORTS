import React, { useEffect, useState } from 'react';
import { FaUtensils, FaLeaf, FaWineGlassAlt, FaMountain, FaClock, FaPhoneAlt } from 'react-icons/fa';
import '../styles/Restaurant.css';

const restaurantImages = [
    '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.35 PM (1).jpeg', // Hero
    '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.39 PM (1).jpeg',
    '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.39 PM.jpeg',
    '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.40 PM.jpeg',
    '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.42 PM.jpeg'
];

const signatureDishes = [
    {
        name: "Kumaoni Thali",
        desc: "A traditional platter featuring Bhatt ki Churkani, Aloo ke Gutke, and Mandua Roti."
    },
    {
        name: "Himalayan Trout",
        desc: "Fresh river trout grilled to perfection with local herbs and lemon butter sauce."
    },
    {
        name: "Pangoot Special Curry",
        desc: "Chef's special vegetable curry made with organic produce from local farms."
    },
    {
        name: "Pahadi Smoked Chicken",
        desc: "Tender chicken marinated in local spices and slow-cooked over wood fire for a smoky flavor."
    }
];

const features = [
    {
        icon: <FaMountain />,
        title: "Panoramic Views",
        desc: "Dine with a breathtaking 180-degree view of the Himalayas."
    },
    {
        icon: <FaLeaf />,
        title: "Farm to Table",
        desc: "We use organic ingredients sourced directly from local farmers."
    },
    {
        icon: <FaWineGlassAlt />,
        title: "Candlelight Dining",
        desc: "Experience a romantic ambiance under the starry sky."
    }
];

const Restaurant = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="restaurant-page">
            {/* Parallax Hero Section */}
            <div className="restaurant-hero">
                <div
                    className="hero-bg-layer"
                    style={{
                        backgroundImage: `url('${restaurantImages[0]}')`,
                        transform: `translateY(${scrolled * 0.5}px)` // Parallax effect
                    }}
                ></div>
                <div className="hero-overlay"></div>

                <div className="hero-content fade-in-up">
                    <p className="sub-heading">Welcome to</p>
                    <h1>Hilltop Pangoot Dining</h1>
                    <p className="tagline">A Taste of Nature</p>
                    <a href="#menu" className="btn-hero">View Menu</a>
                </div>
            </div>

            {/* Intro Section */}
            <section className="restaurant-intro container">
                <div className="intro-content">
                    <h5>OUR PHILOSOPHY</h5>
                    <h2>Dining With A View</h2>
                    <div className="line-gold"></div>
                    <p>
                        Indulge in a culinary journey at our exclusive mountain-view restaurant.
                        We offer a delightful blend of local Kumaoni delicacies and multi-cuisine favorites,
                        prepared with fresh, locally sourced ingredients. Whether it's a hearty breakfast
                        overlooking the valley or a romantic dinner under the stars, every meal here is an experience.
                    </p>
                    <div className="intro-icons">
                        <div className="intro-icon-item">
                            <FaClock /> <span>7:00 AM - 10:30 PM</span>
                        </div>
                        <div className="intro-icon-item">
                            <FaPhoneAlt /> <span>Reservations Recommended</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="restaurant-features">
                <div className="container features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Signature Menu Section */}
            <section id="menu" className="signature-menu">
                <div className="container">
                    <div className="section-header-center">
                        <h5>CHEF'S SELECTION</h5>
                        <h2>Signature Dishes</h2>
                        <div className="line-gold"></div>
                    </div>

                    <div className="menu-grid">
                        {signatureDishes.map((dish, index) => (
                            <div key={index} className="menu-card">
                                <div className="menu-info">
                                    <h3>{dish.name}</h3>
                                    <p>{dish.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="restaurant-gallery container">
                <div className="section-header-center">
                    <h5>OUR AMBIANCE</h5>
                    <h2>Gallery</h2>
                    <div className="line-gold"></div>
                </div>

                <div className="gallery-masonry">
                    {restaurantImages.map((img, index) => (
                        <div key={index} className="gallery-item-masonry">
                            <img src={img} alt={`Restaurant Ambiance ${index + 1}`} />
                            <div className="overlay-hover">
                                <FaUtensils />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section-parallax" style={{ backgroundImage: `url('${restaurantImages[1]}')` }}>
                <div className="cta-overlay"></div>
                <div className="cta-content container">
                    <h2>Reserve Your Table</h2>
                    <p>Experience the finest dining in Pangoot. Book your table today.</p>
                    <a
                        href="https://wa.me/919410120797?text=I would like to reserve a table at the restaurant."
                        className="btn-reserve"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book via WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Restaurant;
