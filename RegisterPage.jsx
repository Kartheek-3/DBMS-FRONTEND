import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'; // Icons for username, email, and password
import './signup.css'; // Import the same or separate CSS file for signup

function SignupPage() {
  const [response, setResponse] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Perform form validation here (e.g., check for empty fields, valid email)

    // Simulate API call (replace with actual API call)
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      setResponse('Account Created Successfully!');
      setTimeout(() => setResponse(''), 3000);
    } else {
      setResponse('Registration Failed. Please try again.');
      setTimeout(() => setResponse(''), 3000);
    }
  };

  return (
    <div className="signup-container"> {/* Rename container class for signup */}
      <div className="signup-box"> {/* Rename box class for signup */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-container">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
        {response && <p className="response">{response}</p>}
      </div>
    </div>
  );
}

export default SignupPage;