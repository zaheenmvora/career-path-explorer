import React from 'react';

const CareerDetail = ({ career, onBack }) => {
    if (!career) return null;

    return (
        <div className="career-detail animate-fade-in" style={{ padding: '40px 0' }}>
            <button
                onClick={onBack}
                className="glass"
                style={{
                    padding: '8px 16px',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                ← Back to Search
            </button>

            <div className="glass-card" style={{ padding: '40px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#818cf8' }}>{career.title}</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>{career.description}</p>

                <div className="roadmap-section" style={{ marginBottom: '48px' }}>
                    <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        Roadmap
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        {career.roadmap.map((step, idx) => (
                            <div key={idx} className="glass" style={{ padding: '20px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-10px', left: '20px', background: 'var(--primary)', color: 'white', padding: '2px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700' }}>
                                    STEP {idx + 1}
                                </div>
                                <h4 style={{ marginBottom: '8px', marginTop: '8px' }}>{step.step}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{step.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div className="resource-col">
                        <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            High-Value Playlists
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {career.resources.youtube.map((res, idx) => (
                                <a key={idx} href={res.url} target="_blank" rel="noreferrer" className="glass" style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>{res.name}</span>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>YouTube ↗</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="resource-col">
                        <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            Top Platforms
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {career.resources.websites.map((res, idx) => (
                                <a key={idx} href={res.url} target="_blank" rel="noreferrer" className="glass" style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>{res.name}</span>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Visit ↗</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetail;
