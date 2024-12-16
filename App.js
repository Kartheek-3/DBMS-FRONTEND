import React, { useState, useEffect } from 'react';
import { fetchData, insertData } from './services/api'; // Assuming your API service is in services/api.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';  // Import this only once
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import OrdersPage from './components/OrdersPage';
import PaymentPage from './components/PaymentPage';  // Correct import for PaymentPage

function App() {
  const [data, setData] = useState([]); // Holds data fetched from the database
  const [formData, setFormData] = useState({
    customer_name: '',
    product_name: '',
    price: '',
  }); // Holds form input values

  // Fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(); // Fetch data from backend
        setData(result); // Set fetched data in state
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  // Handle form submission to insert data
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      await insertData({
        ...formData,
        created_at_customer: new Date().toISOString(), // Add a timestamp dynamically
      });
      const updatedData = await fetchData(); // Refresh data after insertion
      setData(updatedData); // Update state with refreshed data
      setFormData({ customer_name: '', product_name: '', price: '' }); // Reset the form fields
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <HomePage>
              <div>
                <h1>Data from PostgreSQL</h1>
                {/* Display the fetched data */}
                <ul>
                  {data.map((item) => (
                    <li key={item.customer_id}>
                      {item.customer_name} - {item.product_name} - ${item.price}
                    </li>
                  ))}
                </ul>

                {/* Form to add data */}
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Customer Name"
                    value={formData.customer_name}
                    onChange={(e) =>
                      setFormData({ ...formData, customer_name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.product_name}
                    onChange={(e) =>
                      setFormData({ ...formData, product_name: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                  <button type="submit">Add Data</button>
                </form>
              </div>
            </HomePage>
          }
        />
        <Route path="/products" element={<ProductsPage />} /> {/* Correct path */}
        <Route path="/payment" element={<PaymentPage />} />  {/* Correct path */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
