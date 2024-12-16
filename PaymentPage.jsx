// PaymentPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access state passed via navigation
import './payment.css';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Access product data passed from ProductsPage
  const location = useLocation();
  const selectedProduct = location.state?.product;

  useEffect(() => {
    if (selectedProduct) {
      setAmount(selectedProduct.price); // Pre-fill the amount field with the product price
    }
  }, [selectedProduct]);

  const handlePayment = async (event) => {
    event.preventDefault();

    const paymentData = { cardNumber, expiryDate, cvv, amount };

    try {
      const response = await fetch('http://localhost:3000/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData),
      });
      const result = await response.json();

      if (response.ok) {
        alert('Payment Successful');
        window.location.href = '/';
      } else {
        setErrorMessage(result.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <main>
      <h2>Payment</h2>
      {selectedProduct && (
        <div>
          <h3>Product: {selectedProduct.name}</h3>
          <p>Price: ${selectedProduct.price}</p>
        </div>
      )}
      <form onSubmit={handlePayment}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="month"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Pay Now</button>
      </form>
    </main>
  );
}

export default PaymentPage;
