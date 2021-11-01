import React from 'react';

import image from '../../images/about.jpg';
import './About.css';
const About = () => {
    return (
        <div>

            <div className="about-container">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="about-right">
                    <h2>About Us</h2>
                    <p>The travel business has been consistently changing since leisure tourism started. The changes come with the culture of the time. Think back to the famous Pan Am era when flyers would get a first-class experience in every flight. But at the same time, the culture had more of an elevated lifestyle, men and women were dressed for success every day. That same generation still wakes up every morning ready for whatever the day could bring them. In the 90’s many of us can remember the ATA Your On Vacation commercials. It was a time where it seemed that everyone could afford a plane ticket to somewhere warm and fun. In the early 2000s, booking travel for oneself became more accessible. Then September 11th changed the way many of us thought about traveling. We wanted a sense of security. Now as we are in the first quarter of 2021, COVID is still affecting the way we travel. Travel advisors are starting to get recognition for how helpful they were when the pandemic shut down tourism last spring. There were horror stories of those who had to cancel their own trips by waiting on hold for hours with online-based companies and vendors they booked on their own.</p>
                </div>
            </div>
        </div>
    );
};

export default About;