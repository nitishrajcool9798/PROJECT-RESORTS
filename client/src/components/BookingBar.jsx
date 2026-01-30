import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaCheck } from 'react-icons/fa';
import '../styles/BookingBar.css';

const BookingBar = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);

    const handleCheckAvailability = (e) => {
        e.preventDefault();
        const phoneNumber = "919410120797";
        const message = `*Check Availability Inquiry*
        
Check-In: ${checkIn || 'Not selected'}
Check-Out: ${checkOut || 'Not selected'}
Guests: ${guests}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="booking-bar-wrapper">
            <div className="booking-bar container">



                <div className="booking-field border-left">
                    <label>CHECK IN</label>
                    <div className="input-group">
                        <input
                            type="date"
                            className="booking-date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>
                </div>

                <div className="booking-field border-left">
                    <label>CHECK OUT</label>
                    <div className="input-group">
                        <input
                            type="date"
                            className="booking-date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>
                </div>

                <div className="booking-field border-left">
                    <label>GUESTS</label>
                    <div className="input-group">
                        <input
                            type="number"
                            min="1"
                            max="10"
                            className="booking-number"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                        <span className="guest-label">Guests</span>
                    </div>
                </div>

                <div className="booking-action">
                    <button
                        className="btn-book-online"
                        onClick={handleCheckAvailability}
                    >
                        Check Availability
                    </button>
                </div>

            </div>
        </div >
    );
};

export default BookingBar;
