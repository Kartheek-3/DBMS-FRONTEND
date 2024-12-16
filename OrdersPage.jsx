import React, { useState, useEffect } from 'react';
import './orders.css';

function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from an API or mock data
        const mockOrders = [
            { id: 1, date: '2024-12-01', items: ['T-shirt', 'Jeans'], total: '$50' },
            { id: 2, date: '2024-12-05', items: ['Shoes'], total: '$30' },
        ];
        setOrders(mockOrders);
    }, []);

    return (
        <section id="orders-page">
            <h2>My Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.items.join(', ')}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default OrdersPage;
