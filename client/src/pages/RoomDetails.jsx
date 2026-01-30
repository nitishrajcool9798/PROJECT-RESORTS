import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCheck, FaPhoneAlt, FaArrowLeft } from 'react-icons/fa';
import roomsData from '../data/roomsData';
import '../styles/RoomDetails.css';

const RoomDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find room by slug
    const room = roomsData.find(r => r.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!room) {
        return (
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>Room not found</h2>
                <button onClick={() => navigate('/')} className="btn-link">Go Home</button>
            </div>
        );
    }

    const handleBookNow = () => {
        const phoneNumber = "919410120797";
        const message = `Hello, I'm interested in booking the ${room.name}. Please provide availability.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="room-details-container">
            {/* Hero Section */}
            <div className="room-hero">
                <img src={room.image} alt={room.name} className="room-hero-img" />
                <div className="room-hero-overlay">
                    <div className="room-hero-content">
                        <button className="btn-back" onClick={() => navigate(-1)} style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '10px 20px', borderRadius: '30px', marginBottom: '20px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <FaArrowLeft /> Back
                        </button>
                        <h1>{room.name}</h1>
                        <span className="location">{room.location}</span>
                    </div>
                </div>
            </div>

            <div className="room-main-content">
                {/* Left Column */}
                <div className="room-left-col">
                    <div className="section">
                        <h2 className="section-title">Overview</h2>
                        <p className="room-description">{room.desc}</p>
                    </div>

                    {room.gallery && (
                        <div className="section">
                            <h2 className="section-title">Gallery</h2>
                            <div className="details-gallery-grid">
                                {room.gallery.map((img, index) => (
                                    <div key={index} className="gallery-item">
                                        <img src={img} alt={`${room.name} ${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {room.features && (
                        <div className="section">
                            <h2 className="section-title">Amenities</h2>
                            <div className="details-amenities-list">
                                {room.features.map((feature, index) => (
                                    <div key={index} className="amenity-pill">
                                        <FaCheck />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column (Sticky Booking Card) */}
                <div className="room-right-col">
                    <div className="booking-card">
                        <h3>Reserve Your Stay</h3>

                        {room.rates && (
                            <div className="rates-list">
                                {room.rates.map((rate, index) => (
                                    <div key={index} className="rate-row">
                                        <span className="plan-label">{rate.plan}</span>
                                        <span className="plan-value">{rate.price}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="divider" style={{ margin: '20px 0', borderBottom: '1px solid #eee' }}></div>

                        <button className="book-btn" onClick={handleBookNow}>
                            <FaPhoneAlt /> Book via WhatsApp
                        </button>
                        <p style={{ marginTop: '15px', fontSize: '0.85rem', color: '#888', textAlign: 'center' }}>
                            *Custom meal plans available upon request
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
