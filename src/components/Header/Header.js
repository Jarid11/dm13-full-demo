import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};

const Header = props => (
  <div className="header">
    <div className="links">
      <Link to="/" style={linkStyle}>
        <div className="link">Home</div>
      </Link>
      <Link to="/login" style={linkStyle}>
        <div className="link">Login</div>
      </Link>
      <Link to="/shop" style={linkStyle}>
        <div className="link">Shop</div>
      </Link>
      <Link to="/cart" style={linkStyle}>
        <div className="link">Cart {props.cart.length || 0}</div>
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({ ...state.productReducer });

export default connect(mapStateToProps)(Header);
