import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Home() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles for background
        const particlesArray = [];
        for (let i = 0; i < 50; i++) {
            particlesArray.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 5,
            });
        }
        setParticles(particlesArray);

        // Counter animation
        const animateCounters = () => {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + '+';
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                updateCounter();
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        });

        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            observer.observe(statsSection);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="cyber-grid"></div>
                    <div className="particles" id="particles">
                        {particles.map(particle => (
                            <div
                                key={particle.id}
                                className="particle"
                                style={{
                                    left: `${particle.left}%`,
                                    top: `${particle.top}%`,
                                    width: `${particle.size}px`,
                                    height: `${particle.size}px`,
                                    animationDelay: `${particle.delay}s`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="hero-content">
                    <div className="hero-logo-container">
                        <img src={logo} alt="Cyber Intelligence Hub" className="hero-logo" />
                        <div className="logo-glow"></div>
                    </div>
                    <h1 className="hero-title">
                        <span className="glitch" data-text="Cyber Intelligence Hub">
                            Cyber Intelligence Hub
                        </span>
                    </h1>
                    <p className="hero-subtitle">Empowering the Next Generation of Cybersecurity Professionals</p>
                    <div className="hero-buttons">
                        <a href="#about" className="btn btn-primary">
                            <span>Explore More</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <Link to="/events" className="btn btn-secondary">
                            <span>View Events</span>
                            <i className="fas fa-calendar-alt"></i>
                        </Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <p>Scroll Down</p>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">About Us</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p className="lead">
                                The Cyber Intelligence Hub is a premier student organization dedicated to fostering cybersecurity awareness, research, and hands-on learning experiences.
                            </p>
                            <p>
                                We bring together passionate students, industry experts, and cybersecurity enthusiasts to create a collaborative environment where knowledge sharing and skill development thrive. Through workshops, challenges, and real-world projects, we prepare our members for successful careers in the ever-evolving field of cybersecurity.
                            </p>
                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3 className="stat-number" data-target="500">0</h3>
                                        <p className="stat-label">Active Members</p>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="fas fa-calendar-check"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3 className="stat-number" data-target="50">0</h3>
                                        <p className="stat-label">Events Organized</p>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="fas fa-trophy"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3 className="stat-number" data-target="25">0</h3>
                                        <p className="stat-label">Competitions Won</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <div className="image-wrapper">
                                <img src={logo} alt="Cyber Intelligence Hub" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-mission">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-card">
                            <div className="vm-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="vm-title">Our Vision</h3>
                            <p className="vm-text">
                                To be the leading hub for cybersecurity innovation and education, creating a community of skilled professionals who protect the digital frontier and shape the future of information security.
                            </p>
                            <div className="vm-glow"></div>
                        </div>
                        <div className="vm-card">
                            <div className="vm-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 className="vm-title">Our Mission</h3>
                            <p className="vm-text">
                                To provide comprehensive cybersecurity education, hands-on training, and industry exposure through workshops, capture-the-flag competitions, research initiatives, and collaborative projects that empower students to excel in cybersecurity.
                            </p>
                            <div className="vm-glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Events Section */}
            <section className="live-events">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Live Events</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="events-grid">
                        <div className="event-card live">
                            <div className="event-badge live-badge">
                                <span className="pulse-dot"></span>
                                LIVE NOW
                            </div>
                            <div className="event-image">
                                <img src={logo} alt="CTF Challenge" />
                                <div className="event-overlay"></div>
                            </div>
                            <div className="event-content">
                                <h3 className="event-title">Capture The Flag Challenge</h3>
                                <p className="event-description">
                                    Join our live CTF competition and test your hacking skills against challenging security scenarios.
                                </p>
                                <div className="event-meta">
                                    <span className="event-time">
                                        <i className="far fa-clock"></i> Happening Now
                                    </span>
                                    <span className="event-participants">
                                        <i className="fas fa-users"></i> 120 Participants
                                    </span>
                                </div>
                                <Link to="/events" className="event-link">
                                    Join Now <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="event-card upcoming">
                            <div className="event-badge">UPCOMING</div>
                            <div className="event-image">
                                <img src={logo} alt="Workshop" />
                                <div className="event-overlay"></div>
                            </div>
                            <div className="event-content">
                                <h3 className="event-title">Web Security Workshop</h3>
                                <p className="event-description">
                                    Learn about OWASP Top 10 vulnerabilities and how to secure web applications.
                                </p>
                                <div className="event-meta">
                                    <span className="event-time">
                                        <i className="far fa-calendar"></i> Feb 15, 2026
                                    </span>
                                    <span className="event-participants">
                                        <i className="fas fa-user-plus"></i> Register
                                    </span>
                                </div>
                                <Link to="/events" className="event-link">
                                    Learn More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="event-card upcoming">
                            <div className="event-badge">UPCOMING</div>
                            <div className="event-image">
                                <img src={logo} alt="Seminar" />
                                <div className="event-overlay"></div>
                            </div>
                            <div className="event-content">
                                <h3 className="event-title">Industry Expert Seminar</h3>
                                <p className="event-description">
                                    Guest lecture on emerging trends in cloud security and zero-trust architecture.
                                </p>
                                <div className="event-meta">
                                    <span className="event-time">
                                        <i className="far fa-calendar"></i> Feb 22, 2026
                                    </span>
                                    <span className="event-participants">
                                        <i className="fas fa-user-plus"></i> Register
                                    </span>
                                </div>
                                <Link to="/events" className="event-link">
                                    Learn More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
