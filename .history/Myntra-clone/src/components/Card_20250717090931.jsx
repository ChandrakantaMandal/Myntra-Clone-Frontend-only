import React from "react";

const Card = () => {
  return (
    <div className="menu-container">
      <div className="menu-column">
        <h5 className="menu-title">Topwear</h5>
        <ul>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li>Rain Jackets</li>
        </ul>
        <h5 className="menu-subtitle">Indian & Festive Wear</h5>
        <ul>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </ul>
      </div>

      <div className="menu-column">
        <h5 className="menu-title">Bottomwear</h5>
        <ul>
          <li>Jeans</li>
          <li>Casual Trousers</li>
          <li>Formal Trousers</li>
          <li>Shorts</li>
          <li>Track Pants & Joggers</li>
        </ul>
        <h5 className="menu-subtitle">Innerwear & Sleepwear</h5>
        <ul>
          <li>Briefs & Trunks</li>
          <li>Boxers</li>
          <li>Vests</li>
          <li>Sleepwear & Loungewear</li>
          <li>Thermals</li>
        </ul>
        <h5 className="menu-subtitle">Plus Size</h5>
        
      </div>
      
      {/* Repeat more columns as needed based on your image */}
    </div>
  );
};

export default Card;
