import React, { useEffect, useState } from 'react';
import './styles/invoice.css';

function InvoicePage() {
    const [invoiceDetails, setInvoiceDetails] = useState({});
    const [orderId, setOrderId] = useState('123');  // Example order ID

    useEffect(() => {
        async function fetchInvoiceDetails() {
            try {
                const response = await fetch(`http://localhost:3000/invoice?orderId=${orderId}`);
                const data = await response.json();
                if (response.ok) {
                    setInvoiceDetails(data);
                } else {
                    console.log(data.message || 'Failed to fetch invoice details');
                }
            } catch (error) {
                console.error('Error fetching invoice details:', error);
            }
        }

        fetchInvoiceDetails();
    }, [orderId]);

    return (
        <main>
            <h2>Invoice Details</h2>
            {invoiceDetails ? (
                <div>
                    <p>Invoice ID: {invoiceDetails.invoiceId}</p>
                    <p>Order ID: {invoiceDetails.orderId}</p>
                    <p>Total Amount: ${invoiceDetails.totalAmount}</p>
                    <p>Invoice Date: {invoiceDetails.invoiceDate}</p>
                </div>
            ) : (
                <p>Loading invoice details...</p>
            )}
        </main>
    );
}

export default InvoicePage;
