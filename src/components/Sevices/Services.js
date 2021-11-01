import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://secret-beach-86139.herokuapp.com/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="travel-container">
            <h2>Booking Our Premium Travel Services</h2>
            <div className="booking-service">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;