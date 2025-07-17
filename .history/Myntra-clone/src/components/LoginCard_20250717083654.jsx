import React from "react";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ setShow }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="card border-success mb-3 position-absolute "
      style={{ maxWidth: "20rem", left: "75%" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="card-header bg-transparent border-success">
        <strong>Welcome</strong>
        <p>To access account and manage orders</p>
        <button
          type="button"
          class="btn btn-outline-danger"
          text-cl
          onClick={handleButtonClick}
        >
          LOGIN/SIGNUP
        </button>
      </div>
      <div className="card-body">
        <p className="card-text">
          <ul>
            <li><Orders</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
            <li>Myntra Insider</li>
          </ul>
        </p>
      </div>
      <div className="card-footer bg-transparent border-success">
        <ul>
          
          <li>Myntra Credit</li>
          <li>Coupons</li>
          <li>Saved Cards</li>
          <li>Saved VPA</li>
          <li>Saved Addresses</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginCard;
