import React from 'react';
import { FaUtensils, FaSpa, FaRing, FaImages, FaHiking } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/IconNav.css';

const IconNav = () => {
    return (
        <div className="icon-nav-container">
            <Link to="/restaurant" className="icon-nav-item" style={{ textDecoration: 'none' }}>
                <FaUtensils className="nav-icon" />
                <span>Dining</span>
            </Link>
            <div className="icon-nav-item">
                <FaSpa className="nav-icon" />
                <span>Wellness</span>
            </div>
            <div className="icon-nav-item">
                <FaRing className="nav-icon" />
                <span>Wedding & Events</span>
            </div>
            <Link to="/tours" className="icon-nav-item" style={{ textDecoration: 'none' }}>
                <FaHiking className="nav-icon" />
                <span>Tours & Tracking</span>
            </Link>
            <Link to="/gallery" className="icon-nav-item" style={{ textDecoration: 'none' }}>
                <FaImages className="nav-icon" />
                <span>Gallery</span>
            </Link>
        </div>
    );
};

export default IconNav;
