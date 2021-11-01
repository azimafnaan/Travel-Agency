import { Card, Button } from 'react-bootstrap';
import './MyOrder.css';
const MyOrder = ({ order }) => {
    const { serviceName, email, name } = order;
    const handleDelete = id => {
        const url = `http://localhost:5000/addOrder/${ id }`;
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Order Item');

                }
            })
    }
    return (
        <div>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Client Name:{name}</Card.Header>
                <Card.Body>
                    <Card.Title>{email}</Card.Title>
                    <Card.Text>
                        ServiceName: {serviceName}
                    </Card.Text>
                    <Button onClick={() => handleDelete(order._id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyOrder;