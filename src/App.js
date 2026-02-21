import React, { useState } from 'react';
import './App.css';
import { careerData } from './data/careers';
import Hero from './components/Hero';
import CareerCard from './components/CareerCard';
import CareerDetail from './components/CareerDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);

  const filteredCareers = careerData.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="container">
        {selectedCareer ? (
          <CareerDetail
            career={selectedCareer}
            onBack={() => setSelectedCareer(null)}
          />
        ) : (
          <>
            <Hero onSearch={setSearchTerm} />

            <div className="career-grid-header" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.8rem' }}>Available Career Paths</h2>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Showing {filteredCareers.length} career{filteredCareers.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredCareers.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
                paddingBottom: '80px'
              }}>
                {filteredCareers.map(career => (
                  <CareerCard
                    key={career.id}
                    career={career}
                    onClick={setSelectedCareer}
                  />
                ))}
              </div>
            ) : (
              <div className="glass" style={{ padding: '60px', textAlign: 'center', marginTop: '40px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                  No career paths found matching "{searchTerm}". Try another keyword!
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {!selectedCareer && (
        <footer className="glass" style={{ margin: '40px 24px 20px', padding: '24px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © 2026 Career Path Explorer 
            By Zaheen M Vora
          </p>
        </footer>
      )}
    </div>
  );
}

export default App;