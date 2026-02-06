import { Link } from 'react-router-dom';

function Initiatives() {
    return (
        <div className="initiatives-page" style={{
            minHeight: '100vh',
            padding: '120px 20px',
            textAlign: 'center',
            position: 'relative',
            background: 'radial-gradient(circle at center, #1a1a40 0%, #050510 70%)'
        }}>
            <h1 className="page-title">Initiatives</h1>
            <p style={{
                color: '#a0a0c0',
                fontSize: '1.2rem',
                marginBottom: '40px',
                maxWidth: '800px',
                margin: '0 auto 40px',
                lineHeight: '1.6'
            }}>
                Explore our ongoing research projects, community awareness programs, and technical developments in the field of cybersecurity.
            </p>
            <div className="coming-soon-badge" style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: 'rgba(255, 0, 255, 0.1)',
                border: '1px solid #ff00ff',
                borderRadius: '50px',
                color: '#ff00ff',
                fontFamily: 'Orbitron',
                letterSpacing: '2px',
                marginBottom: '40px'
            }}>
                PROJECT: UNDER DEVELOPMENT
            </div>
            <br />
            <Link to="/" className="btn btn-secondary">
                <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
        </div>
    );
}

export default Initiatives;
