import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import './Booking.css';
const Booking = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState([]);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-beach-86139.herokuapp.com/addOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Booking Successfully Complete');
                    reset();
                }

            })


    }
    useEffect(() => {
        fetch(`https://secret-beach-86139.herokuapp.com/services/${ serviceId }`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    // const myBookingItems = service ? service.find(td => td.id == serviceId) : []
    return (
        <div className="booking">
            <img
                className="d-block w-100"
                src={service.img}
                alt=""
            />
            <div className="booking-container">
                <div className="booking-left">
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                    <p>Booking Fee: {service.price}</p>
                    <h5>We are Offering</h5>
                    <p>  Planning and selling transportations, accommodations, insurance and other travel services</p>
                    <p>Cooperating with clients to determine their needs and advising them appropriate </p>
                    <p>destination, modes of transportations, travel dates, costs and accommodations</p>
                    <p>Providing relevant information (guides, local customs, maps, regulations, events etc) to travelers</p>
                </div>
                <div>
                    <h3>Booking Now</h3>
                    <div className="booking-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name", { maxLength: 50 })} placeholder="User Name" />
                            <input defaultValue={user.email} type="email" {...register("email", { maxLength: 50 })} placeholder="Email" />
                            <input {...register("serviceName", { required: true, maxLength: 50 })} placeholder="Service Name" />
                            <input type="number" {...register("price")} placeholder="Booking Fee" />
                            <input className="submit" type="Submit" />
                        </form>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;