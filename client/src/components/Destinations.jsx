import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Destinations.css';
import driveImages from '../data/imageLinks';

const destinations = [
    {
        id: 1,
        name: 'Delux Cottage',
        location: 'Pangoot',
        image: driveImages[0], // First image
        desc: 'Experience the ultimate comfort and luxury in our exclusive Delux Cottages.',
        link: '/rooms'
    },
    {
        id: 2,
        name: 'Family Cottage',
        location: 'Pangoot',
        image: driveImages[1], // Second image
        desc: 'Spacious and cozy cottages designed perfectly for family stays.',
        link: '/rooms'
    },
    {
        id: 3,
        name: 'Restaurant',
        location: 'Pangoot',
        image: '/images/Resturant/WhatsApp Image 2026-01-15 at 6.21.42 PM.jpeg', // Local Restaurant Image
        desc: 'Delicious local and multi-cuisine dishes served with a view.',
        link: '/restaurant'
    }
];

const Destinations = () => {
    return (
        <section className="destinations-section container">
            <div className="section-header">
                <h5>OUR ACCOMMODATIONS</h5>
                <h2>Explore Our Destinations</h2>
                <div className="line"></div>
            </div>

            <div className="destinations-grid">
                {destinations.map(dest => (
                    <div key={dest.id} className="destination-card">
                        <div className="card-image">
                            <img src={dest.image} alt={dest.name} />
                            <div className="location-tag">{dest.location}</div>
                        </div>
                        <div className="card-content">
                            <h3>{dest.name}</h3>
                            <p>{dest.desc}</p>
                            {dest.link.startsWith('http') ? (
                                <a
                                    href={dest.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link"
                                    style={{ textDecoration: 'none', display: 'inline-block' }}
                                >
                                    Explore Now &rarr;
                                </a>
                            ) : (
                                <Link
                                    to={dest.link}
                                    className="btn-link"
                                    style={{ textDecoration: 'none', display: 'inline-block' }}
                                >
                                    Explore Now &rarr;
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
