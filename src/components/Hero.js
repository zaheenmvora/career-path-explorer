import React from 'react';

const Hero = ({ onSearch }) => {
    return (
        <div className="hero-section" style={{ padding: '80px 0 60px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Explore Your Future
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                Discover high-value resources, roadmaps, and platforms for the most in-demand careers in Computer Engineering.
            </p>
            <div className="search-container" style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
                <input
                    type="text"
                    placeholder="Search careers (e.g. ML Engineer, Frontend)..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="glass"
                    style={{
                        width: '100%',
                        padding: '16px 24px',
                        fontSize: '1rem',
                        color: 'white',
                        outline: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;
