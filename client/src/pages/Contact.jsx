import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "919410120797";
        const message = `*New Inquiry from Contact Form*
        
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        setStatus('Redirecting to WhatsApp...');
        setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <h1>CONTACT US FOR RESERVATIONS</h1>
                    <div className="breadcrumb">
                        <span>Home</span> <span className="separator">/</span> <span>Contact Us</span>
                    </div>
                </div>
            </div>

            <div className="contact-container container">
                <div className="contact-layout">
                    {/* Left Column: Contact Form */}
                    <div className="contact-form-section">
                        <h2>Drop A Message For Any Query</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Enter subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Write Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message here"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-consent">
                                <input type="checkbox" id="consent" required />
                                <label htmlFor="consent">I accept to receive updates via WhatsApp/SMS</label>
                            </div>

                            <button type="submit" className="btn-gold">SEND A MESSAGE &rarr;</button>
                            {status && <p className="status-message">{status}</p>}
                        </form>
                    </div>

                    {/* Right Column: Dark Sidebar */}
                    <div className="contact-sidebar">
                        <h2>Reach Us</h2>

                        <div className="sidebar-item">
                            <h3>Hilltop Pangoot</h3>
                            <p>Geeli Mitti Marg, Mahrora Village, Opp. to Shaolin Gurukul, Pangot (Post Office), Nainital, Uttarakhand 263001</p>
                        </div>

                        <div className="sidebar-divider"></div>

                        <div className="sidebar-item">
                            <h3>Reservations</h3>
                            <p className="highlight">+91 94101 20797</p>
                            <p>hilltoppangot9@gmail.com</p>
                        </div>

                        <div className="sidebar-divider"></div>

                        <div className="sidebar-item">
                            <h3>Sales/Marketing</h3>
                            <p className="highlight">+91 94101 20797</p>
                            <p>hilltoppangot9@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
