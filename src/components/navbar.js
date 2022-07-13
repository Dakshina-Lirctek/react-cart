import React from "react";
import "../styles/navbar.css";
import {Link} from 'react-router-dom';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Back
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        <div className="order_btn">
         <Link to="order">Order Page</Link>
        </div>
      </div>
    
    </nav>
  );
};

export default Navbar;
