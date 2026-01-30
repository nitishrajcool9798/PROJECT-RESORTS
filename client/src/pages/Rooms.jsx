import React from 'react';
import '../styles/Rooms.css';
import driveImages from '../data/imageLinks';
const rooms = [
    {
        id: 1,
        name: 'Deluxe Cottage',
        price: '₹ 6,000 / Night', // Estimated price, can be adjusted
        size: '450 sq.ft',
        view: 'Jungle and Forest View',
        image: driveImages[0],
        features: ['King Size Bed', 'Private Balcony', 'Heater', 'Free Wi-Fi', 'Blackout Curtains']
    },
    {
        id: 2,
        name: 'Family Cottage',
        price: '₹ 6,000 / Night', // Estimated price
        size: '800 sq.ft',
        view: 'Garden & Mountain View',
        image: '/images/family cottage/WhatsApp Image 2026-01-15 at 6.21.40 PM (2).jpeg',
        features: ['2 Queen Beds', 'Living Area', 'Private Sit-out', 'Interconnected rooms', 'Wake-Up Service']
    }
];

const Rooms = () => {

    const handleBookNow = (room) => {
        const phoneNumber = "919410120797";
        const message = `Hello, I want to book this room: ${room.name} - ${room.price} with all the required details.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="rooms-page">
            <div className="rooms-hero">
                <h1>Rooms & Suites</h1>
            </div>

            <div className="rooms-container container">
                {rooms.map(room => (
                    <div key={room.id} className="room-card">
                        <div className="room-image">
                            <img src={room.image} alt={room.name} />
                        </div>
                        <div className="room-details">
                            <h2>{room.name}</h2>
                            <div className="room-meta">
                                <span>{room.size}</span>
                                <span>{room.view}</span>
                            </div>
                            <ul className="room-features">
                                {room.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className="room-price">
                                <h3>{room.price}</h3>
                                <button
                                    className="btn-primary"
                                    onClick={() => handleBookNow(room)}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
