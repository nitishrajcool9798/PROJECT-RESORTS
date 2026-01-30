import React from 'react';
import '../styles/Rooms.css';
import driveImages from '../data/imageLinks';
const rooms = [
    {
        id: 4,
        name: 'Luxury Penthouse',
        price: '₹ 35,000 / Night',
        size: '1200 sq.ft',
        view: '360 Degree View',
        image: driveImages[0], // 1st Image
        features: ['Private Pool', 'Butler Service', 'King Size Bed', 'Jacuzzi', 'High-speed Wi-Fi']
    },
    {
        id: 1,
        name: 'Superior Room',
        price: '₹ 12,000 / Night',
        size: '350 sq.ft',
        view: 'Garden View',
        image: driveImages[3], // 4th Image
        features: ['King Size Bed', 'Free Wi-Fi', 'Breakfast Included', 'Private Balcony']
    },
    {
        id: 2,
        name: 'Premium Suite',
        price: '₹ 18,000 / Night',
        size: '500 sq.ft',
        view: 'Mountain View',
        image: driveImages[4], // 5th Image
        features: ['Jacuzzi', 'Mini Bar', 'Panoramic Views', '24/7 Room Service']
    },
    {
        id: 3,
        name: 'The Baagh Villa',
        price: '₹ 25,000 / Night',
        size: '800 sq.ft',
        view: 'Valley View',
        image: driveImages[5], // 6th Image
        features: ['Private Pool', 'Butler Service', 'Living Room', 'Luxury Amenities']
    },
    {
        id: 5,
        name: 'The Royal Suite',
        price: '₹ 28,000 / Night',
        size: '950 sq.ft',
        view: 'Forest View',
        image: driveImages[25], // New Image (drive_26)
        features: ['Master Bedroom', 'Private Lounge', 'Forest Facing', 'Premium Mini Bar']
    },
    {
        id: 6,
        name: 'Garden Cottage',
        price: '₹ 15,000 / Night',
        size: '400 sq.ft',
        view: 'Garden View',
        image: driveImages[0], // Using reused images for variety (drive_1)
        features: ['Private Garden', 'Outdoor Seating', 'King Bed', 'Rain Shower']
    },
    {
        id: 7,
        name: 'Mountain Chalet',
        price: '₹ 22,000 / Night',
        size: '600 sq.ft',
        view: 'Himalayan View',
        image: driveImages[1], // drive_2
        features: ['Wooden Interiors', 'Fireplace', 'Balcony', 'Heated Flooring']
    },
    {
        id: 8,
        name: 'Premium Valley Room',
        price: '₹ 19,500 / Night',
        size: '550 sq.ft',
        view: 'Valley View',
        image: driveImages[2], // drive_3
        features: ['Large Windows', 'Work Desk', 'Smart TV', 'Coffee Machine']
    },
    {
        id: 9,
        name: 'Luxury Tent',
        price: '₹ 16,000 / Night',
        size: '450 sq.ft',
        view: 'Nature View',
        image: driveImages[3], // drive_4
        features: ['Glamping Experience', 'AC', 'Attached Bath', 'Private Deck']
    },
    {
        id: 10,
        name: 'Family Suite',
        price: '₹ 30,000 / Night',
        size: '1100 sq.ft',
        view: 'Resort View',
        image: driveImages[4], // drive_5
        features: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Gaming Console']
    },
    {
        id: 11,
        name: 'Honeymoon Suite',
        price: '₹ 24,000 / Night',
        size: '700 sq.ft',
        view: 'Sunset View',
        image: driveImages[5], // drive_6
        features: ['Round Bed', 'Jacuzzi', 'Candlelight Dinner Setup', 'Flower Decor']
    },
    {
        id: 12,
        name: 'Presidential Villa',
        price: '₹ 50,000 / Night',
        size: '2000 sq.ft',
        view: 'Panoramic View',
        image: driveImages[6], // drive_7
        features: ['Private Pool', 'Gym', 'Home Theater', 'Personal Chef']
    },
    {
        id: 13,
        name: 'Deluxe Room',
        price: '₹ 10,000 / Night',
        size: '300 sq.ft',
        view: 'Courtyard View',
        image: driveImages[7], // drive_8
        features: ['Queen Bed', 'Shower Cubicle', 'Tea/Coffee Maker', 'Safe']
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
