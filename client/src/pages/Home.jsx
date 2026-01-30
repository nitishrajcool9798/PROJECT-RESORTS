import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import SocialSidebar from '../components/SocialSidebar';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            {/* Booking Bar is now part of the Hero layout structure visually, but we keep it here if stacking works or move it into Hero */}
            {/* Booking Bar moved into Hero for better overlay integration */}
            <Destinations />
            <Experience />
            <Testimonials />
            {/* <SocialSidebar /> */}
        </div>
    );
};

export default Home;
