import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container container">

                {/* Left Navigation */}
                <nav className="nav-left desktop-only">
                    <ul>
                        <li className="dropdown-trigger">
                            <Link to="/rooms">Accommodation</Link>
                        </li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>

                {/* Center Logo */}
                <div className="logo-center">
                    <Link to="/">
                        <div className="logo-box">
                            {/* Using local logo file from images/Logo folder */}
                            <img src="/images/Logo/Logo.png" alt="Hilltop Pangoot Logo" className="tiger-icon" />
                            <div className="logo-text">
                                <span className="logo-sub">Resorts By</span>
                                <span className="logo-main">HILLTOP PANGOOT</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right Navigation */}
                <nav className="nav-right desktop-only">
                    <ul>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <a href="tel:+919410120797" className="btn-outline-gold"><FaPhoneAlt style={{ marginRight: '8px' }} /> +91-9410120797</a>
                </nav>

                {/* Mobile Toggle */}
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/rooms" onClick={() => setMenuOpen(false)}>Accommodation</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
