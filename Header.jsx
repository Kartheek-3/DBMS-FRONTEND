import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './header.css';
import './search.css';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header>
            <div className="header-container">
                {/* Logo Section */}
                <h1 className="logo">MyFashionStore</h1>

                {/* Navigation Links with Individual Boxes */}
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/orders">My Orders</Link></li>
                    </ul>
                </nav>

                {/* Search Bar */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                    <FaSearch className="search-icon" />
                </div>

                {/* Auth Icons */}
                <div className="auth-icons">
                    <Link to="/login">
                        <img src="https://previews.123rf.com/images/sarahdesign/sarahdesign1403/sarahdesign140300871/26699464-login-icon-or-button-login-login-button-login-icon-login-sign-icon-button-sign-sign.jpg" alt="Login Icon" />
                    </Link>
                    <Link to="/register">
                        <img src="https://as2.ftcdn.net/v2/jpg/02/49/94/45/1000_F_249944552_xttPBei8rvnyfQ7LxgdUm4sxAgd1bMNO.jpg" alt="Signup Icon" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
