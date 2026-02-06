import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <img src={logo} alt="Cyber Intelligence Hub Logo" className="nav-logo" />
                    <span className="brand-text">Cyber Intelligence Hub</span>
                </div>
                <div
                    className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    id="navToggle"
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
                    <li>
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/office-bearers"
                            className={`nav-link ${isActive('/office-bearers') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Office Bearers
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className={`nav-link ${isActive('/events') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/initiatives"
                            className={`nav-link ${isActive('/initiatives') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Initiatives
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
