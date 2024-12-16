import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './products.css';

function ProductsPage() {
  const [products, setProducts] = useState([]); // Holds the product list
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Backend API for products
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  // Handle "Add to Cart" button click
  const handleAddToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Product added to cart');
      } else {
        console.error('Failed to add product to cart', result);
      }
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };

  return (
    <section id="products">
      <h2>Available Products</h2>

      {/* Product List */}
      <div id="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
