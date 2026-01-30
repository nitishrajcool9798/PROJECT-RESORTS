import React, { useEffect } from 'react';
import { FaTimes, FaCheck, FaPhoneAlt } from 'react-icons/fa';
import '../styles/RoomDetailsSidebar.css';

const RoomDetailsSidebar = ({ room, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !room) return null;

    const handleBookNow = () => {
        const phoneNumber = "919410120797";
        const message = `Hello, I'm interested in the ${room.name}. Please provide more details on availability.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="room-modal-overlay">
            <div className="room-modal-container">
                <button className="modal-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>

                {/* Left Side: Immersive Gallery */}
                <div className="modal-gallery">
                    <div className="gallery-scroll">
                        {room.gallery ? (
                            room.gallery.map((img, index) => (
                                <img key={index} src={img} alt={`${room.name} View ${index + 1}`} className="gallery-img" />
                            ))
                        ) : (
                            <img src={room.image} alt={room.name} className="gallery-img main" />
                        )}
                        {/* Fallback duplication for layout if gallery is small */}
                        {room.gallery && room.gallery.length < 3 && (
                            <img src={room.image} alt={room.name} className="gallery-img" />
                        )}
                    </div>
                    <div className="gallery-overlay-gradient">
                        <h2>{room.name}</h2>
                        <p>{room.location}</p>
                    </div>
                </div>

                {/* Right Side: Content Scroll */}
                <div className="modal-content">
                    <div className="content-header">
                        <h3>Experience Luxury</h3>
                        <p className="modal-desc">{room.desc}</p>
                    </div>

                    <div className="modal-section">
                        <h4>Premium Amenities</h4>
                        <div className="modal-amenities-grid">
                            {room.features && room.features.map((feature, index) => (
                                <div key={index} className="modal-amenity-card">
                                    <FaCheck className="amenity-icon" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {room.rates && (
                        <div className="modal-section">
                            <h4>Exclusive Rates</h4>
                            <div className="pricing-card">
                                {room.rates.map((rate, index) => (
                                    <div key={index} className="pricing-row">
                                        <span className="plan-name">{rate.plan}</span>
                                        <span className="plan-price">{rate.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-actions">
                        <button className="modal-book-btn" onClick={handleBookNow}>
                            <FaPhoneAlt style={{ marginRight: '10px' }} />
                            Book via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsSidebar;
