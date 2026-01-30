import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        location: "New Delhi",
        text: "An absolute gem in Pangoot! The views were mesmerizing and the service was top-notch. Highly recommended for a peaceful getaway.",
        rating: 5
    },
    {
        id: 2,
        name: "Amit Patel",
        location: "Mumbai",
        text: "The jungle cottage experience was unforgettable. Waking up to the sounds of birds and nature was pure bliss. Will visit again!",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Davis",
        location: "London",
        text: "Luxury meets wilderness. The staff made sure our stay was comfortable and the food was delicious. A perfect 10/10.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section container">
            <div className="section-header">
                <h5>WHAT OUR GUESTS SAY</h5>
                <h2>Testimonials</h2>
                <div className="line"></div>
            </div>

            <div className="testimonials-grid">
                {testimonials.map(item => (
                    <div key={item.id} className="testimonial-card">
                        <p className="review-text">"{item.text}"</p>
                        <div className="rating">{'★'.repeat(item.rating)}</div>
                        <div className="author">
                            <h4>{item.name}</h4>
                            <span>{item.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
