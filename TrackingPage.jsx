import React, { useEffect, useState } from 'react';
import './tracking.css';

function TrackingPage() {
    const [trackingDetails, setTrackingDetails] = useState({});
    const [orderId, setOrderId] = useState('123');  // Example order ID

    useEffect(() => {
        async function fetchTrackingDetails() {
            try {
                const response = await fetch(`http://localhost:3000/tracking?orderId=${orderId}`);
                const data = await response.json();
                if (response.ok) {
                    setTrackingDetails(data);
                } else {
                    console.log(data.message || 'Failed to fetch tracking details');
                }
            } catch (error) {
                console.error('Error fetching tracking details:', error);
            }
        }

        fetchTrackingDetails();
    }, [orderId]);

    return (
        <main>
            <h2>Tracking Details</h2>
            {trackingDetails ? (
                <div>
                    <p>Order ID: {trackingDetails.orderId}</p>
                    <p>Status: {trackingDetails.currentStatus}</p>
                    <p>Location: {trackingDetails.location}</p>
                    <p>Last Updated: {trackingDetails.lastUpdated}</p>
                </div>
            ) : (
                <p>Loading tracking details...</p>
            )}
        </main>
    );
}

export default TrackingPage;
