import React from "react";

const LoginCard = () => {
  return (
    <div className="card border-success mb-3 position-absolute "style={{ maxWidth: "20rem", left: '120%', }}>
      <div className="card-header bg-transparent border-success">
        <strong>Welcome</strong>
        <p>To access account and manage orders</p>
        <button type="button" class="btn btn-outline-secondary">
          LOGIN/SIGNUP
        </button>
      </div>
      <div className="card-body">
        <p className="card-text">
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Myntra Insider</li>
        </p>
      </div>
      <div className="card-footer bg-transparent border-success">
        <li>Myntra Credit</li>
        <li>Coupons</li>
        <li>Saved Cards</li>
        <li>Saved VPA</li>
        <li>Saved Addresses</li>
      </div>
    </div>
  );
};

export default LoginCard;
