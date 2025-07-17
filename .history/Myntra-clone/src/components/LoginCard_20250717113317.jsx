import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice";

const LoginCard = ({ setShow }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
    if (isAuthenticated) {
      dispatch(logout());
      navigate("/login");
    }
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
       
        {isAuthenticated ? "LOGOUT" : "LOGIN/SIGNUP"}
      </div>
      <div className="card-body">
        <p className="card-text">
          <ul>
            <li>Orders</li>
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
