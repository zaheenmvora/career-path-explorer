import React from 'react';

const CareerCard = ({ career, onClick }) => {
    return (
        <div className="glass-card animate-fade-in" onClick={() => onClick(career)} style={{ padding: '24px', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#818cf8' }}>{career.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>
                {career.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                Explore Path →
            </div>
        </div>
    );
};

export default CareerCard;
