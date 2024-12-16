import React, { useEffect, useState } from 'react';
import './delivery.css';

function DeliveryPage() {
    const [deliveryDetails, setDeliveryDetails] = useState({});
    const [orderId, setOrderId] = useState('123');  // Example order ID

    useEffect(() => {
        async function fetchDeliveryDetails() {
            try {
                const response = await fetch(`http://localhost:3000/delivery?orderId=${orderId}`);
                const data = await response.json();
                if (response.ok) {
                    setDeliveryDetails(data);
                } else {
                    console.log(data.message || 'Failed to fetch delivery details');
                }
            } catch (error) {
                console.error('Error fetching delivery details:', error);
            }
        }

        fetchDeliveryDetails();
    }, [orderId]);

    return (
        <main>
            <h2>Delivery Status</h2>
            {deliveryDetails ? (
                <div>
                    <p>Order ID: {deliveryDetails.orderId}</p>
                    <p>Status: {deliveryDetails.status}</p>
                    <p>Estimated Delivery Date: {deliveryDetails.estimatedDate}</p>
                    <p>Delivery Address: {deliveryDetails.address}</p>
                </div>
            ) : (
                <p>Loading delivery details...</p>
            )}
        </main>
    );
}

export default DeliveryPage;
