import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="/images/Logo/Logo.png" alt="Hilltop Pangoot" className="footer-logo" style={{ maxWidth: '180px', marginBottom: '20px' }} />
                        <p>Experience the luxury of nature in the heart of the mountains. Your perfect getaway awaits.</p>

                    </div>



                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Geeli Mitti Marg, Mahrora Village, Opp. to Shaolin Gurukul, Pangot (Post Office), Nainital, Uttarakhand 263001</p>
                        <p>+91 94101 20797</p>
                        <p>+91 84750 17373</p>
                        <p>+91 90272 20354</p>
                        <p>hilltoppangot9@gmail.com</p>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Subscribe for exclusive offers and updates.</p>
                        <form className="subscribe-form">
                            <input type="email" placeholder="Your Email Address" />
                            <button type="submit" className="btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} HillTop Pangoot. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
