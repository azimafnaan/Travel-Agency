import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';
const MyOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://secret-beach-86139.herokuapp.com/addOrder')
            .then(res => res.json())
            .then(data => setOrder(data))
    })
    return (
        <div className="myOrders">
            <h2>This is My Order Page</h2>
            <div className="order-container">
                {
                    order.map(order => <MyOrder
                        key={order._id}
                        order={order}
                    ></MyOrder>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;