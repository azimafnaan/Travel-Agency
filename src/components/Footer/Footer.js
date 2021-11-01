import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="Footer">
            <h3>Join Us</h3>
            <div className="Footer-container">
                <div>
                    <h4>Friends Travel Agency</h4>
                    <p>About Us</p>
                    <p>Events</p>
                    <p>Regular News</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h4>Events</h4>
                    <p>Overview</p>
                    <p>Finance and Accounting</p>
                    <p>Reports</p>
                </div>
                <div>
                    <h4>Connect With Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;