import React from 'react';
import banner from '../../images/Banner2.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-section">
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;