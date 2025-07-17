import React from "react";

const LoginCard = () => {
  return (
    <div className="card border-success mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header bg-transparent border-success">
        <strong>Welcome</strong>
        <p>To access account and manage orders</p>
        <button type="button" class="btn btn-outline-secondary">
          LOGIN/SIGNUP
        </button>
      </div>
      <div className="card-body">
        <p className="card-text">
            
        spa
                <li></li>
                <li>Wishlist</li>
                <li>Gift Cards</li>
                <li>Contact Us</li>
                <li>Myntra Insider</li>
        </p>
      </div>
      <div className="card-footer bg-transparent border-success">Footer</div>
    </div>
  );
};

export default LoginCard;
