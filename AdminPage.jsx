import React, { useEffect, useState } from 'react';
import './admin.css';

function AdminPage() {
    const [adminStats, setAdminStats] = useState({ totalProducts: 0, totalOrders: 0 });

    useEffect(() => {
        async function fetchAdminStats() {
            try {
                const response = await fetch('http://localhost:3000/admin');
                const data = await response.json();
                if (response.ok) {
                    setAdminStats(data);
                } else {
                    console.log(data.message || 'Failed to fetch admin stats');
                }
            } catch (error) {
                console.error('Error fetching admin stats:', error);
            }
        }

        fetchAdminStats();
    }, []);

    return (
        <main>
            <h2>Admin Dashboard</h2>
            <p>Total Products: {adminStats.totalProducts}</p>
            <p>Total Orders: {adminStats.totalOrders}</p>
        </main>
    );
}

export default AdminPage;
