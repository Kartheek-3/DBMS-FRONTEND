import React, { useEffect, useState } from 'react';

function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchCart() {
            try {
                const response = await fetch('http://localhost:5000/api/cart');
                const data = await response.json();
                setCart(data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        }

        fetchCart();
    }, []);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity} x ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;
