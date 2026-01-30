import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Destinations.css';
import roomsData from '../data/roomsData';

const Destinations = () => {
    return (
        <section className="destinations-section container">
            <div className="section-header">
                <h5>OUR ACCOMMODATIONS</h5>
                <h2>Explore Our Destinations</h2>
                <div className="line"></div>
            </div>

            <div className="destinations-grid">
                {roomsData.map(dest => (
                    <div key={dest.id} className="destination-card">
                        <div className="card-image">
                            <img src={dest.image} alt={dest.name} />
                            <div className="location-tag">{dest.location}</div>
                        </div>
                        <div className="card-content">
                            <h3>{dest.name}</h3>
                            <p>{dest.desc}</p>
                            {/* If it's a room with a slug, link to detailed page; else use its custom link */}
                            {dest.slug === 'restaurant' ? (
                                <Link
                                    to={dest.link}
                                    className="btn-link"
                                    style={{ textDecoration: 'none', display: 'inline-block' }}
                                >
                                    Explore Now &rarr;
                                </Link>
                            ) : (
                                <Link
                                    to={`/room/${dest.slug}`}
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
