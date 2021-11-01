import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { _id, img, name, description, price } = service;
    return (
        <div>
            <div className="service pb-3 shadow p-3 mb-5  rounded">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p className="px-3">{description}</p>
                <p>Booking Price: {price}</p>
                <Link to={`/booking/${ _id }`}>
                    <button className="btn btn-warning ">Booking {name.toLowerCase()}</button>

                </Link>
            </div>
        </div>
    );
};

export default Service;