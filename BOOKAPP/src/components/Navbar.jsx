import React from "react";
import { Link } from "react-router-dom"; // ✅ use React Router for navigation

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">📚 BookStore</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li> {/* ✅ Added Login */}
          <li><Link to="/register">Register</Link></li> {/* ✅ Added Register */}
        </ul>

        <button className="cart-btn">🛒 Cart</button>
      </nav>

      {/* Inline CSS */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #2c3e50;
          padding: 12px 30px;
          color: #fff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .nav-links li a {
          text-decoration: none;
          color: #ecf0f1;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #f39c12;
        }

        .cart-btn {
          background-color: #f39c12;
          border: none;
          padding: 8px 15px;
          border-radius: 8px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cart-btn:hover {
          background-color: #d35400;
        }

        /* Responsive for mobile */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .cart-btn {
            align-self: flex-end;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
