import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import '../styles/SocialSidebar.css';

const SocialSidebar = () => {
    return (
        <div className="social-sidebar">
            <a href="#" className="social-link whatsapp">
                <FaWhatsapp />
            </a>
            <a href="#" className="social-link instagram">
                <FaInstagram />
            </a>
        </div>
    );
};

export default SocialSidebar;
