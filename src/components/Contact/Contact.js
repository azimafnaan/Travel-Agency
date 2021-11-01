import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import images from '../../images/contact.jpg';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <div>
                <h2>Contact Us</h2>

                <form>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Message"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Message" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Where You Traveling"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Where You Traveling" />
                    </FloatingLabel>
                    <Button className="btn btn-warning">Submit</Button>
                </form>
            </div>
            <div className="contact-img">
                <img src={images} alt="" />
            </div>
        </div>
    );
};

export default Contact;