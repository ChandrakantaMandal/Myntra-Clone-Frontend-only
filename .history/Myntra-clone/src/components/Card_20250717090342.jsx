import React from "react";

const Card = () => {
  return (
    <div
      className="card border-success mb-3 flex p-10 d-fleex flex-row"
      style={{ maxWidth: "50rem" }}
    >
      <div className="card-body card">
        <h5 className="card-title">Topwear</h5>

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
      </div>
      <div className="card-body">
        <h6 className="card-title">Indian & Fusion Wear</h6>
        <ul>
          <li>Kurtas & Suits</li>
          <li>Sarees</li>
          <li>Ethnic Wear</li>
          <li>Leggings, Salwars & Churidars</li>
          <li>Skirts & Palazzos</li>
          <li>Dress Materials</li>
          <li>Lehenga Cholis</li>
          <li>Dupattas & Shawls</li>
          <li>Jackets</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
