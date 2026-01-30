import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section className="experience-section">
            <div className="experience-container container">
                <div className="exp-image">
                    <img src="/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.42 PM.jpeg" alt="Dining" />
                </div>
                <div className="exp-content">
                    <h5>UNMATCHED EXPERIENCES</h5>
                    <h2>Dining With A View</h2>
                    <p>Indulge in culinary delights prepared by our expert chefs, using fresh, locally sourced ingredients. Enjoy your meal with panoramic views of the surrounding hills and valleys.</p>
                    <Link to="/restaurant" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Know More</Link>
                </div>
            </div>

            <div className="experience-container container reverse">
                <div className="exp-image">
                    <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Tours & Trekking" />
                </div>
                <div className="exp-content">
                    <h5>ADVENTURE & NATURE</h5>
                    <h2>Tours & Trekking Mountains</h2>
                    <p>Explore the breathtaking trails and hidden gems of Pangoot. Our guided tours take you through lush forests and majestic peaks for an unforgettable experience.</p>
                    <Link to="/tours" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Know More</Link>
                </div>
            </div>
        </section>
    );
};

export default Experience;
