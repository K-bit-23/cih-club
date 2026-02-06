import { Link } from 'react-router-dom';

function Gallery() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0a0e27 0%, #1a1d35 50%, #0f1628 100%)',
            padding: '100px 20px',
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '3rem',
                color: '#00ffff',
                marginBottom: '20px'
            }}>
                Gallery
            </h1>
            <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.2rem',
                marginBottom: '20px'
            }}>
                Coming Soon - Our event photos and memories will be showcased here
            </p>
            <Link to="/" style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'rgba(0, 255, 255, 0.2)',
                color: '#00ffff',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(0, 255, 255, 0.5)',
                transition: 'all 0.3s ease'
            }}>
                Back to Home
            </Link>
        </div>
    );
}

export default Gallery;
