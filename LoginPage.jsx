import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa'; // Importing icons for the username and password
import './login.css';

function LoginPage() {
    const [response, setResponse] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setResponse('Login Successful! Redirecting...');
        setTimeout(() => setResponse(''), 3000);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <FaUserAlt className="input-icon" />
                        <input type="email" placeholder="Username" required />
                    </div>
                    <div className="input-container">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />  Remember me
                        </label>
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
                {response && <p className="response">{response}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
