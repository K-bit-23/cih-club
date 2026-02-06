import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orionBanner from '../assets/orion-2k26.jpeg';
import './Events.css';

function Events() {
    const calculateTimeLeft = () => {
        const difference = +new Date('2026-03-05T09:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const events_list = [
        "Innosell", "Story2Screen", "Fix & Flex", "Brain Blitz",
        "Reel Rush", "Reboot the Waste", "Lock & Seek", "Brandit"
    ];

    return (
        <div className="events-container">
            {/* Event Header Card */}
            <div className="event-main-card">
                <div className="event-status-badge">
                    <div className="status-dot"></div>
                    <span className="status-text">REGISTRATION OPEN</span>
                </div>
                <div className="event-college-info">
                    <h2>KONGU ENGINEERING COLLEGE</h2>
                    <div className="event-association">ASSOCIATION OF COMPUTER APPLICATIONS</div>
                </div>

                <div className="event-title-badge">
                    <h1 className="event-name">ORION 2K26</h1>
                    <div className="event-date">MARCH 5, 2026</div>
                    <div className="event-venue">C K PRAHALAD SEMINAR HALL (MCA / MBA BLOCK)</div>
                </div>

                {/* Countdown Timer */}
                <div className="countdown-box">
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.days || '00'}</span>
                        <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.hours || '00'}</span>
                        <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.minutes || '00'}</span>
                        <span className="countdown-label">Mins</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-value">{timeLeft.seconds || '00'}</span>
                        <span className="countdown-label">Secs</span>
                    </div>
                </div>

                {/* Workshop Spotlight */}
                <div className="workshop-highlight">
                    <span className="workshop-label">Free Workshop</span>
                    <h2 className="workshop-name">Cyber Security Career Bootcamp</h2>
                    <p style={{ color: '#ffd700', fontWeight: 'bold' }}>MISSION: HIGH-LEVEL BOOTCAMP STARTED</p>
                </div>

                {/* Events Grid */}
                <div className="event-list">
                    {events_list.map((event, index) => (
                        <div key={index} className="event-item">
                            <i className="fas fa-check-square"></i>
                            <span>{event}</span>
                        </div>
                    ))}
                </div>

                {/* Quick Info & Registration */}
                <div className="info-grid">
                    <div className="register-card">
                        <h3>SAVE THE DATE</h3>
                        <div className="banner-box" style={{
                            width: '100%',
                            marginTop: '20px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            border: '1px solid rgba(0, 243, 255, 0.3)'
                        }}>
                            <img src={orionBanner} alt="Orion 2K26 Banner" style={{ width: '100%', display: 'block' }} />
                        </div>
                        <div className="reg-price" style={{ marginTop: '20px' }}>Entry: ₹ 200</div>
                    </div>

                    <div className="contact-info">
                        <div className="contact-row">
                            <span className="contact-label">FACULTY COORDINATOR</span>
                            <div className="contact-value">Dr.M.Pyingkodi</div>
                            <div className="contact-phone">9943114104</div>
                        </div>
                        <div className="contact-row">
                            <span className="contact-label">STUDENT COORDINATORS</span>
                            <div className="contact-value">Balaji Hariharan N S & Kaliswary K</div>
                        </div>
                        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                            <i className="fas fa-arrow-left"></i> Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
