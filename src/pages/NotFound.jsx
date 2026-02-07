import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="error-code">4<span className="glitch-digit" data-text="0">0</span>4</div>

            <div className="animation-box">
                <div className="radar">
                    <div className="radar-sweep"></div>
                    <div className="radar-blip p1"></div>
                    <div className="radar-blip p2"></div>
                </div>
                <div className="robot-container">
                    <div className="robot">
                        <div className="robot-head">
                            <div className="robot-eyes">
                                <div className="eye left"></div>
                                <div className="eye right"></div>
                            </div>
                        </div>
                        <div className="robot-body">
                            <div className="robot-chest">
                                <div className="light"></div>
                            </div>
                        </div>
                    </div>
                    <div className="robot-shadow"></div>
                </div>
            </div>

            <div className="mystery-text">
                <h2>SIGNAL LOST IN DEEP WEB</h2>
                <p>Our scouts are searching the dark alleys of the internet, but they can't find this page.</p>
                <div className="snarky-message">
                    {">"} Maybe it was deleted by a rogue AI?<br />
                    {">"} Or maybe you just typed it wrong...
                </div>
            </div>

            <Link to="/" className="back-home-btn">
                <span className="btn-text">INITIALIZE EXTRACTION</span>
                <span className="btn-glitch"></span>
            </Link>

            <div className="background-noise"></div>
        </div>
    );
};

export default NotFound;
